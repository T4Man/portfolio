(function(module){

  contentView = {};

  contentView.initMainPage = function(){
    ContentConstr.project.forEach(function(a){
      $('#projects').empty();
      $('#projects').append(a.populateProjects());
    });
  };

})(window);
