# GlobalUrbanMapper

## Introduction

GlobalUrbanMapper is a comprehensive project specifically designed for the prediction of global urban areas. This project employs Sentinel-2, Sentinel-1, and SRTM satellite data sets to perform detailed urban mapping with a spatial resolution of 10m.

This repository contains the JavaScript code for multimodal imagery generation with Google Earth Engine (GEE), the model used for global urban mapping, and a prediction code that leverages the mmsegmentation library. The model and the resources are suitable for the analysis of urban areas starting from the year 2018 and extending into future years.

Whether you are an urban planner, researcher, or a scientist interested in understanding urban growth patterns on a global scale, GlobalUrbanMapper provides a powerful solution with its ability to process satellite data for accurate urban area prediction and analysis. Beyond its core mapping capabilities, the model also supports the generation of patch annotations and serves as a valuable source of training data. Additionally, the embedded urban-specific knowledge within the model makes it a candidate for pretraining in transfer learning applications related to urban studies.

![Project Overview](GUM_snapshot_Suva.png)

## Table of Contents

- [Installation and Setup](#installation-and-setup)
- [Usage Guidelines](#usage-guidelines)
- [Contributing](#contributing)
- [Contact Information](#contact-information)
- [License](#license)

## Installation and Setup
Before starting with the project, make sure to fulfill the following prerequisites:

1. **Google Earth Engine Account:** Our project uses GEE for multimodal data generation. Make sure you have a GEE account that can be used to run the provided GEE code. If you don't have an account, visit [Google Earth Engine](https://courses.spatialthoughts.com/gee-sign-up.html#non-commercial-users) to sign up.

## Usage Guidelines
This repository includes three main components: the JavaScript code for data generation using Google Earth Engine, the global urban mapping model (i.e., GLobal Urban Mapper), and the prediction code using MMSegmentation. Here's how to use each component:

1. **JavaScript Code for Multimodal Imagery Generation in GEE**: To use this, navigate to the `gee_code` directory. You should find a file named `data_generation.js`. Copy the code in this file to Google Earth Engine's Code Editor and run it. Make sure to replace any placeholders with your specific parameters. Additionally, for those interested in deriving patch-level labels, refer to `patch_generation.js` to initially generate the patch geometries, then use `data_generation.js` to acquire multimodal data for all patches.

2. **Global Urban Mapper**: You can find the model in the `model` directory. The directory includes both the model and its structural information, allowing end-users the flexibility to employ this model as a pretrained model for transfer learning applications.

3. **Prediction Code Using MMSegmentation**: The prediction code is in the `prediction_code` directory. Ensure that the generated data is prepared and accessible, and that both the model checkpoint and its corresponding configuration file have been downloaded before executing the prediction code.

Please note that any paths or parameters mentioned in the code should be adjusted to fit your specific use case. For help or more information, refer to the individual README files in each directory or raise an issue in the GitHub repository.

## Contact Information
For additional questions or further clarification on anything related to the project, please reach out via email at [22042458r@connect.polyu.hk](mailto:22042458r@connect.polyu.hk).

## License
This project is licensed under the MIT License.
