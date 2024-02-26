/*
  AUTHOR: LauraChow 
  EMAIL: 22042458r@connect.polyu.hk
  
  This script serves the purposed of given a GEOMETRY and TIME SPAN,
  a. generating the Sentinel-2 (self-defined bands), Sentinel-1 (VV and VH), and SRTM (including elevation, slope, and aspect) imagery.
*/

// -----------------------------------------------------------------------------
// Section 1: Import required modules
// -----------------------------------------------------------------------------
var UniversalTools = require("users/Laura_Chow77/default:utils/UniversalTools");
var ImgDataGeneration = require("users/Laura_Chow77/default:utils/ImgDataGeneration");

// -----------------------------------------------------------------------------
// Section 3: User-defined variables
// -----------------------------------------------------------------------------
var userVars = {
  geometry: image.geometry(),
  start_date: '2019-01-01',
  end_date: '2020-01-01',
  name: '' // (export image name)
};

// -----------------------------------------------------------------------------
// Section 2: Data import and preprocessing
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Section 4: Helper functions
// -----------------------------------------------------------------------------
function calculateGeographicalInfo() {
  var continent_name = UniversalTools.inWhichContinent(userVars.geometry);
  var urban_ecoregion_idx = UniversalTools.inWhichUrbanEcoregion(userVars.geometry);
  return {continent_name: continent_name, urban_ecoregion_idx: urban_ecoregion_idx};
}

function generateMulimodalImagery(geometry_bbox, start_date, end_date) {
  var s2_coll = ImgDataGeneration.genSentinel2Data(geometry_bbox, [start_date, end_date], ['B4', 'B3', 'B2', 'B8']);
  var crs = s2_coll.first().projection().crs();
  var s1_coll_list = ImgDataGeneration.genSentinel1Data(geometry_bbox, [start_date, end_date], crs);
  
  var topo = ImgDataGeneration.genTopoData();

  var projection = s2_coll.first().projection();
  var s1_ascending = s1_coll_list[0].mean();
  var s1_descending = s1_coll_list[1].mean();
  var s1 = s1_ascending.addBands(s1_descending).toFloat();
  var s2 = s2_coll.median().divide(10000).toFloat(); 
  var topo = topo.resample('bilinear').reproject({crs: projection, scale: 10}).toFloat();

  return {s1: s1, s2: s2, topo: topo, projection: projection};
}

// -----------------------------------------------------------------------------
// Section 5: Main function
// -----------------------------------------------------------------------------
function main() {
  // Calculate bounding box and geographical info
  var geometry_bbox = userVars.geometry.bounds();
  var geometry_bbox_coordinates = UniversalTools.calBBoxCoordinates(geometry_bbox);
  var geoInfo = calculateGeographicalInfo();
  Map.addLayer(geometry_bbox, {}, userVars.name);
  Map.centerObject(geometry_bbox);
  
  // Generate imagery
  var imagery = generateMulimodalImagery(geometry_bbox, userVars.start_date, userVars.end_date);
  var multimodal_imagery = imagery.s2.addBands(imagery.s1).addBands(imagery.topo);

  // Export imagery
  // (customize the export parameters as needed)
  var crs = imagery.projection.crs().getInfo();
  Export.image.toDrive({
    image: multimodal_imagery,
    region: geometry_bbox,
    scale: 10,
    crs: crs,
    maxPixels: 1e13,
    description: userVars.name,
  });

}

main();
