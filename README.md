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
This repository includes three main components: the JavaScript code for data generation using Google Earth Engine, the global urban mapping model (i.e., GLobal Urban Mapper), and the prediction code using MMSegmentation.

## Methodology Guidelines: General Procedures

## Application Guidelines: Mapping and Deep Learning Use Cases
### Mapping with GlobalUrbanMapper
- **Generate Data**: Navigate to `gee_code`, use `data_generation.js` in Google Earth Engine to generate imagery. Customize parameters as necessary.
- **Model Setup**: Access the pretrained model in the `model` directory.
- **Run Predictions**: After configuring the model and downloading necessary files,  execute the `global_urban_mapping_opensource.ipynb` in `prediction_code`.

### Transfer Learning Based on GlobalUrbanMapper

### Pseudo Label Generation by GlobalUrbanMapper
- **Generate Data**: Navigate to `gee_code`, use `patch_generation.js` in Google Earth Engine to generate patch candidates. Use `patch_data_download.ipynb` to download patch data. Customize parameters as necessary.
- **Model Setup**: Access the pretrained model in the `model` directory.
- **Run Predictions**: After configuring the model and downloading necessary files,  execute the `global_urban_mapping_opensource.ipynb` in `prediction_code`.

## Contact Information
For additional questions or further clarification on anything related to the project, please reach out via email at [22042458r@connect.polyu.hk](mailto:22042458r@connect.polyu.hk).

## License
This project is licensed under the MIT License.
