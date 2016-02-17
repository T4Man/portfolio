(function(module) {
  var mainsController = {};

  mainsController.index = function() {
    ContentConstr.fetchProjects(contentView.initMainPage);
      $('#projects').show().siblings().hide();
  };

  module.mainsController = mainsController;
})(window);
