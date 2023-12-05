# `prediction_code` Directory for Global Urban Mapper (GUM)

Welcome to the prediction code directory of the Global Urban Mapper (GUM) project. This directory contains the necessary resources for running predictions using the `GUM` model, such as the dataset configuration file and the project launch arguments.

## Contents

This directory contains the following important files and resources:

- `dataset_config.py`: This is the configuration file for the dataset that the `GUM` model will use for predictions. It includes code for reading multimodal `.tif` image files.

- `launch_arguments.txt`: This file contains the command-line arguments needed to launch the prediction project.

## Dataset Configuration Guidelines

To set up your dataset for running predictions, follow these detailed steps:

1. **Copy the Dataset Configuration File**:
   Copy the `gum_dataset_config.py` file to the `mmsegmentation-master/configs/_base_/datasets` directory in your local `mmsegmentation-master` repository.

2. **Modify the Loading Pipeline**: 
   Update the `loading.py` file located at `mmsegmentation-master/mmseg/datasets/pipelines` by integrating the multimodal `.tif` image loading class and label loading class from the `load_multimodal_tif_n_load_annotation.py` file. Afterward, register the newly incorporated classes in the `__init__.py` file in the same directory.

3. **Place and Register the GUM Dataset File**:
   Place the `gum.py` file in the `mmsegmentation-master/mmseg/datasets` directory of your local `mmsegmentation-master` repository. Then, register it in the `__init__.py` file in the same directory.

## Making Predictions
To run predictions using the GUM model, follow the steps below:

1. **Copy the Model Configuration File**: Copy the pspnet_unet_s5-d16_256x256_50e_gum_prediction.py file to the `mmsegmentation-master\configs\unet` directory in your local `mmsegmentation-master` repository.

2. **Configure the Project**: Adjust the project configurations as per your requirements by referring to the `launch.json` file. This file contains essential configurations for the GUM model, including batch size, learning rate, and other hyperparameters.

3. **Run the Prediction Script**: After setting up the configuration, execute test.py in the `mmsegmentation-master/tools` directory in your local `mmsegmentation-master` repository. This will load the model and the dataset, and start making predictions. The results will be saved in the specified output directory.
