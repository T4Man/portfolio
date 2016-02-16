(function(module){
  var aboutController = {};

  aboutController.index = function() {
    $('#about-me').show().siblings().hide();
  };
    module.aboutController = aboutController;
})(window);
