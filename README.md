# GlobalUrbanMapper

## Introduction

GlobalUrbanMapper is a comprehensive project specifically designed for the prediction of global urban areas. This project employs Sentinel-2, Sentinel-1, and SRTM satellite data sets to perform detailed urban mapping with a spatial resolution of 10m.

This repository contains the JavaScript code for multimodal imagery generation with Google Earth Engine (GEE), the model used for global urban mapping, and a prediction code that leverages the mmsegmentation library. The model and the resources are suitable for the analysis of urban areas from the years 2018 to 2023.

Whether you are an urban planner, researcher, or a scientist interested in understanding urban growth patterns on a global scale, GlobalUrbanMapper provides a powerful solution with its ability to process satellite data for accurate urban area prediction and analysis.

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
2. **MMSegmentation**: The project relies on MMSegmentation version 0.29.0. For detailed installation instructions, please follow the guide in our [Get Started section](https://github.com/open-mmlab/mmsegmentation/blob/main/docs/en/get_started.md#installation).
3. **Rasterio**: We use Rasterio for reading and writing raster data. You can install it using pip or conda.

## Usage Guidelines
This repository includes three main components: the JavaScript code for data generation using Google Earth Engine, the global urban mapping model (i.e., GLobal Urban Mapper), and the prediction code using MMSegmentation. Here's how to use each component:

1. **JavaScript Code for Multimodal Imagery Generation in GEE**: To use this, navigate to the `gee_code` directory. You should find a file named `data_generation.js`. Copy the code in this file to Google Earth Engine's Code Editor and run it. Make sure to replace any placeholders with your specific parameters.

2. **Global Urban Mapper**: You can find the model in the `model` directory.

3. **Prediction Code Using MMSegmentation**: The prediction code is in the `prediction_code` directory. Before running the code, make sure you have MMSegmentation v0.29.0 installed. The code should be run after the data generation step is complete and the generated data is ready to be used. 

Please note that any paths or parameters mentioned in the code should be adjusted to fit your specific use case. For help or more information, refer to the individual README files in each directory or raise an issue in the GitHub repository.

## Contact Information
For additional questions or further clarification on anything related to the project, please reach out via email at [22042458r@connect.polyu.hk](mailto:22042458r@connect.polyu.hk).

## License
This project is licensed under the MIT License.
