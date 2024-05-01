/*
  AUTHOR: LauraChow 
  EMAIL: 22042458r@connect.polyu.hk
  
  This script is designed to perform the following tasks given a set of POINTS and a PATCH RADIUS:
  a. Generate a set of PATCHES, with each PATCH having a size of (PATCH RADIUS * 2 x PATCH RADIUS * 2) and centered on each POINT.
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
  poi_set: ee.FeatureCollection(''), // please replace this with your own set of points.
  dates: ['2019-01-01', '2020-01-01'],
  reference_band: ['B4', 'B3', 'B2', 'B8'],
  buffer_radius: 128, // this will generate patch with size 256*256
  asset_name: 'buffered_sample'  // please replace this with the output file name.
};


// -----------------------------------------------------------------------------
// Section 5: Main function
// -----------------------------------------------------------------------------
function main() {
  var buffered_poi_set = userVars.poi_set.map(function(poi) {
    var s2_coll = ImgDataGeneration.genSentinel2Data(poi.geometry(), userVars.dates, userVars.reference_band); // Image data is needed to provide projection information and so on.
    return ee.Algorithms.If({
    	condition: s2_coll.size().gt(0),
    	trueCase: UniversalTools.createBufferedPoi(poi, s2_coll, userVars.reference_band[0], userVars.buffer_radius),
    	falseCase: null,
    })
  }, true);
  
  Export.table.toAsset({
    collection: buffered_poi_set,
    description: userVars.asset_name,
  });
}

main();
