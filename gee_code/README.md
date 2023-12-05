# `gee_code` Directory

This directory contains the JavaScript code for data generation using Google Earth Engine (GEE).

## `data_generation.js` File

The `data_generation.js` script is designed to generate multimodal imagery data given a specific geometry and time span. The data includes Sentinel-2 (self-defined bands), Sentinel-1 (VV and VH), and SRTM (including elevation, slope, and aspect) imagery.

To use this script, please copy the code to [Google Earth Engine's Code Editor](https://code.earthengine.google.com/4aa50b096b90c62519418c488faea92c?noload=true) and run it. Remember to replace any placeholders (such as `image.geometry()`, `'2019-01-01'`, `'2020-01-01'`, and `''` in `userVars`) with your specific parameters. 

```javascript
var userVars = {
  geometry: image.geometry(),  // replace with your specific geometry
  start_date: '2019-01-01',  // replace with your specific start date
  end_date: '2020-01-01',  // replace with your specific end date
  name: '' // replace with your specific export image name
};
```

Please note that any paths or parameters mentioned in the code should be adjusted to fit your specific use case. If you need help or further information, feel free to ask for help or raise an issue in the GitHub repository.
