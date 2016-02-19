(function(module){
  var aboutController = {};

  aboutController.index = function(ctx, next) {
    $('#about-me').show().siblings().hide();
    next();
  };
    module.aboutController = aboutController;
})(window);
