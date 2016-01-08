/*global define */
/*jshint esnext: true */
define(['jQuery', 'ko', 'models/ShiftingTilesWPImagePickerModel'], function($, ko, WPImagePickerModel){

  var WPImagePicker = {
    applyBindings: function(){
      ko.applyBindings(new WPImagePickerModel());
    }

  };

  return WPImagePicker;

});
