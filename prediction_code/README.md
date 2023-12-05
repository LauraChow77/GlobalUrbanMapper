# `prediction_code` Directory for Global Urban Mapper (GUM)

Welcome to the prediction code directory of the Global Urban Mapper (GUM) project. This directory contains the necessary resources for running predictions using the `GUM` model, such as the dataset configuration file and the project launch arguments.

## Contents

This directory contains the following important files and resources:

- `dataset_config.py`: This is the configuration file for the dataset that the `GUM` model will use for predictions. It includes code for reading multimodal `.tif` image files.

- `launch_arguments.txt`: This file contains the command-line arguments needed to launch the prediction project.

## Using the Prediction Code

To run predictions using the `GUM` model, follow these steps:

1. Prepare your dataset following the guidelines in `gee_code` and make sure it is in the correct format (multimodal `.tif` images).
2. Adjust the `dataset_config.py` file to match your specific dataset.
3. Launch the prediction project with reference to the arguments provided in `launch_arguments.txt`.
4. It's important to note that all paths, parameters, and arguments should be adjusted to fit your specific use case.
5. 
