(function(module){

  function ContentConstr (opts){
    this.title = opts.title;
    this.image = opts.image;
    this.body = opts.body;
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

  aboutArray.forEach(function(a){
    $('#about-me').append(a.populateAbout());
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
            localStorage.clear();
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
