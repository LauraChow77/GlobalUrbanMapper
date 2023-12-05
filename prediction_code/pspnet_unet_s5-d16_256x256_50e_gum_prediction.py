_base_ = [
    '../_base_/models/pspnet_unet_s5-d16.py', '../_base_/datasets/gum_dataset_config.py',
    '../_base_/default_runtime.py', '../_base_/schedules/schedule_50epoch.py'
]
model = dict(backbone=dict(in_channels=8),
    test_cfg=dict(crop_size=(256, 256), stride=(256, 256)))

evaluation = dict(interval=1, metric='mIoU', ignore_index=255, pre_eval=True, save_best='mIoU')