# dataset settings
dataset_type = 'GumDataset'
data_root = './data/gum_unsup' 

img_scale = (256, 256)
crop_size = (256, 256)

train_pipeline = [
    dict(type='LoadTiffImageFromFile'),
    dict(type='LoadLcnAnnotations'),
    dict(type='RandomFlip', prob=0.5),

    dict(type='Collect', keys=['img', 'gt_semantic_seg'])
]

test_pipeline = [
    dict(type='LoadTiffImageFromFile'),
    dict(
        type='MultiScaleFlipAug',
        img_scale=img_scale,
        flip=False,
        transforms=[
            dict(type='Collect', keys=['img'])
        ])
]

data = dict(
    workers_per_gpu=8,
    train=dict(
        type='RepeatDataset',
        times=1,
        dataset=dict(
            type=dataset_type,
            data_root=data_root,
            img_dir='path/to/your/multimodal_dataset',
            ann_dir='path/to/your/multimodal_dataset_label',
            pipeline=train_pipeline
            ),),
    val=dict(
        type=dataset_type,
        data_root=data_root,
        img_dir='path/to/your/multimodal_dataset',
        ann_dir='path/to/your/multimodal_dataset_label',
        pipeline=test_pipeline),
    test=dict(
        type=dataset_type,
        data_root=data_root,
        img_dir='path/to/your/multimodal_dataset',
        ann_dir='path/to/your/multimodal_dataset_label',
        pipeline=test_pipeline),
    
    train_dataloader=dict(samples_per_gpu=16, shuffle=True),
    val_dataloader=dict(samples_per_gpu=1, shuffle=False),
    test_dataloader=dict(samples_per_gpu=1, shuffle=False)
)
