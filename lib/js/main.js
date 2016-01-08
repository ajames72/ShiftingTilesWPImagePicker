/*global define, require, requirejs, window  */
/*jshint esnext: true */
requirejs.config({
  baseUrl: './js/',   //All js files loaded are relative to this URL
  paths: {
    jQuery: "../../node_modules/jquery/dist/jquery.min",
    ko: "../../node_modules/knockout/build/output/knockout-latest",
  },
  shim: {
    jQuery: {
      exports: '$'
    },
    ko: {
      exports: 'ko'
    },
  }
});

require(['ShiftingTilesWPImagePicker'], function(WPImagePicker){
  WPImagePicker.applyBindings();
});
