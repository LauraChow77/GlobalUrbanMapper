# Copyright (c) OpenMMLab. All rights reserved.

from .builder import DATASETS
from .custom import CustomDataset

from .pipelines import LoadLcnAnnotations


@DATASETS.register_module()
class GumDataset(CustomDataset):
    """HRF dataset.

    In segmentation map annotation for HRF, 0 stands for background, which is
    included in 2 categories. ``reduce_zero_label`` is fixed to False. The
    ``img_suffix`` is fixed to '.png' and ``seg_map_suffix`` is fixed to
    '.png'.
    """

    CLASSES = ('non-urban', 'urban')

    PALETTE = [[0, 0, 0], [255, 255, 255]]

    def __init__(self, **kwargs):
        super(GumDataset, self).__init__(
            img_suffix='.tif',
            seg_map_suffix='.tif',
            reduce_zero_label=False,
            **kwargs)
        assert self.file_client.exists(self.img_dir)
        if self.test_mode:
            self.gt_seg_map_loader = LoadLcnAnnotations(test_mode=True)

    def prepare_train_img(self, idx):
        """Get training data and annotations after pipeline.

        Args:
            idx (int): Index of data.

        Returns:
            dict: Training data and annotation after pipeline with new keys
                introduced by pipeline.
        """

        img_info = self.img_infos[idx]
        ann_info = self.get_ann_info(idx)
        results = dict(img_info=img_info, ann_info=ann_info)
        self.pre_pipeline(results)
        return self.pipeline(results)
