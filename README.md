# GlobalUrbanMapper

## Introduction

GlobalUrbanMapper is a comprehensive project specifically designed for the prediction of global urban areas. This project employs Sentinel-2, Sentinel-1, and SRTM satellite data sets to perform detailed urban mapping with a spatial resolution of 10m.

This repository contains the JavaScript code for multimodal imagery generation with Google Earth Engine (GEE), the model used for global urban mapping, and a prediction code that leverages the mmsegmentation library. The model and the resources are suitable for the analysis of urban areas starting from the year 2018 and extending into future years.

Whether you are an urban planner, researcher, or a scientist interested in understanding urban growth patterns on a global scale, GlobalUrbanMapper provides a powerful solution with its ability to process satellite data for accurate urban area prediction and analysis. Beyond its core mapping capabilities, the model also supports the generation of patch annotations and serves as a valuable source of training data. Additionally, the embedded urban-specific knowledge within the model makes it a candidate for pretraining in transfer learning applications related to urban studies. 

![Project Overview](GUM_snapshot_Suva.png)

## Table of Contents

- [Installation and Setup](#installation-and-setup)
- [Repository Overview: Structure and Components](#repository-overview-structure-and-components)
- [Methodology Guidelines: General Procedures](#methodology-guidelines-general-procedures)
- [Application Guidelines: Mapping and Deep Learning Use Cases](#application-guidelines-mapping-and-deep-learning-use-cases)
- [Contact Information](#contact-information)
- [License](#license)

## Installation and Setup
Before starting with the project, make sure to fulfill the following prerequisites:

1. **Google Earth Engine Account:** Our project uses GEE for multimodal data generation. Make sure you have a GEE account that can be used to run the provided GEE code. If you don't have an account, visit [Google Earth Engine](https://courses.spatialthoughts.com/gee-sign-up.html#non-commercial-users) to sign up.

## Repository Overview: Structure and Components
This repository is organized into three primary folders:
- **`gee_code`**: For data preprocessing techniques using Google Earth Engine, please refer to this directory.
- **`model`**: This directory houses the pretrained model (GUM) along with its configuration files.
- **`prediction_code`**: Provides instructions for running predictions in Google Colab. This is particularly useful for users without access to GPU resources, enabling them to generate urban maps independently.

## Methodology Guidelines: General Procedures
### Data Preprocessing
Most of the necessary preprocessing code is available in the `gee_code` directory. Users can refer to detailed descriptions for each file within the `ReadMe` file located in the `gee_code` directory.
### Model Training
Users with access to their own GPU hardware can refer to the MMSegmentation tutorial for detailed instructions on model training and testing: [MMSegmentation Tutorial](https://mmsegmentation.readthedocs.io/en/latest/user_guides/1_config.html). For users without GPU access, it is recommended to use Google Colab, which provides free GPU resources. Detailed guidance can be found in this Colab notebook: [MMSegmentation Tutorial on Colab](https://github.com/open-mmlab/mmsegmentation/blob/main/demo/MMSegmentation_Tutorial.ipynb).
### Reference for Global Products
To facilitate the search for relevant data products and reduce the time spent on uploading assets to GEE, users can visit the [GEE Community Catalog](https://gee-community-catalog.org). This resource provides a comprehensive hub for community-sourced geospatial datasets.

## Application Guidelines: Mapping and Deep Learning Use Cases
### Mapping with GlobalUrbanMapper
- **Generate Data**: Go to the `gee_code` directory and use the `data_generation.js` script in Google Earth Engine to generate imagery. Adjust parameters as needed.
- **Model Setup**: Locate the pretrained model within the `model` directory.
- **Run Predictions**: Configure the model and download the required files, then run the `global_urban_mapping_os.ipynb` notebook found in the `prediction_code` directory.

### Transfer Learning Based on GlobalUrbanMapper
- **Model Setup**: Access the pretrained model in the `model` directory.
- **Act as Pretrained Model**: Once the model is configured and necessary files are downloaded, use the `global_urban_mapping_os.ipynb` notebook in `prediction_code` to load the pretrained weights and engage in further transfer learning experiments.

### Pseudo Label Generation by GlobalUrbanMapper
- **Generate Data**: In the `gee_code` directory, use the `patch_generation.js` script in Google Earth Engine to create patch candidates. Then, download the patch data using `patch_data_download.ipynb`. Customize parameters as needed.
- **Model Setup**: Access the pretrained model in the `model` directory.
- **Run Predictions**: Configure the model and download the necessary patch files, then execute the `global_urban_mapping_os.ipynb` notebook in the `prediction_code` directory.

## Contact Information
If you have any questions or need further clarification about the project, feel free to reach out by emailing us at [22042458r@connect.polyu.hk](mailto:22042458r@connect.polyu.hk) or by posting an issue on our repository. We welcome any suggestions!

## License
This project is licensed under the MIT License.
