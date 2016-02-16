(function(module){

  function ContentConstr (opts){
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    },this);
  }

  aboutArray = [];
  ContentConstr.project = [];

  ContentConstr.prototype.populateAbout = function(){
    var template = Handlebars.compile($('#about-me-template').text());
    return template(this);
  };

  aboutData.forEach(function(ele){
    aboutArray.push(new ContentConstr(ele));
  });

  aboutArray.forEach(function(ele){
    $('#about-me').append(ele.populateAbout());
  });

  ContentConstr.prototype.populateProjects = function(){
    var template = Handlebars.compile($('#projects-template').text());
    return template(this);
  };

  ContentConstr.loadProjects = function(rawData) {
    ContentConstr.project = rawData.map(function(ele){
      return new ContentConstr(ele);
    });
  };

  ContentConstr.getProjects = function(){
    $.getJSON('/scripts/projects.json', function(data){
      localStorage.rawData = JSON.stringify(data);
      ContentConstr.loadProjects(data);
      contentView.initMainPage();
    });
  };

  ContentConstr.fetchProjects = function() {
    if (localStorage.rawData) {
      $.ajax({
        url: 'scripts/projects.json',
        type: 'HEAD',
        success: function(data, message, xhr){
          console.log(xhr);
          var eTag = xhr.getResponseHeader('eTag');
          if (!localStorage.eTag || eTag !== localStorage.eTag){
            localStorage.eTag = eTag;
          } else {
            ContentConstr.loadProjects(JSON.parse(localStorage.rawData));
            contentView.initMainPage();
          }
        }
      });
    } else {
      ContentConstr.getProjects();
    }
  };
  module.ContentConstr = ContentConstr;
})(window);
