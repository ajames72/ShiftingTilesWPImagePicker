/* global define */
define(['jQuery', 'ko'], function($, ko){
  var WPImagePickerModel = function(){
    var self = this;
    this.images = ko.observableArray();
    this.ajmebcStData = ko.pureComputed({
      read: function(){
        return JSON.stringify(this.images());
      },
      write: function(){},
      owner: this
    });
    /*var imageObj;
    var match = ko.utils.arrayFirst(self.images(), function(item) {
      console.log(item);
        return imageObj.src === item.src;
    });*/

    this.selectImage = function(item, event){
      //Add to array
      var imageObj = {'src': event.target.src};

      if(!this.findMatchedImage(event.target.src)){
        self.images.push(imageObj);
      } else {
        var x = self.images.remove(function (item) { return item.src == imageObj.src; });
      }
    };

    this.findMatchedImage = function(src){
      var match = ko.utils.arrayFirst(self.images(), function(item) {
          return src === item.src;
      });

      return match;
    };
  };

  return WPImagePickerModel;
});
