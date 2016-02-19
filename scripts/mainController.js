(function(module) {
  var mainsController = {};

  mainsController.index = function(ctx, next) {
    ContentConstr.fetchProjects(ctx.projects)
      $('#projects').show().siblings().hide();
      next();
  };
  module.mainsController = mainsController;
})(window);
