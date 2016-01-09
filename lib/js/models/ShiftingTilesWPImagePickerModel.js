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

    this.selectImage = function(item, event){
      //Add to array
      var imageObj = {'src': event.target.src};

      if(!this.findMatchedImage(event.target.src)){
        self.images.push(imageObj);
        $('img[src="' + event.target.src + '"]').css('opacity', '0.5');
        $('img[src="' + event.target.src + '"]').next('.checked-icon').show();
      } else {
        self.images.remove(function (item) { return item.src === imageObj.src; });
        $('img[src="' + event.target.src + '"]').css('opacity', '1');
        $('img[src="' + event.target.src + '"]').next('.checked-icon').hide();
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
