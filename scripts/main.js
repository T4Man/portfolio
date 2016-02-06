var aboutArray = [];
var projectArray = [];

function ContentConstr (opts){
  this.title = opts.title;
  this.image = opts.image;
  this.body = opts.body;
}

ContentConstr.prototype.populateAbout = function(){
  var template = Handlebars.compile($('#about-me-template').text());
  return template(this);
};

ContentConstr.prototype.populateProjects = function(){
  var template = Handlebars.compile($('#projects-template').text());
  return template(this);
};

aboutData.forEach(function(ele){
  aboutArray.push(new ContentConstr(ele));
});

projectData.forEach(function(ele){
  projectArray.push(new ContentConstr(ele));
});

aboutArray.forEach(function(a){
  $('#about-me').append(a.populateAbout());
});

projectArray.forEach(function(a){
  $('#projects').append(a.populateProjects());
});

$('#about-me').hide();

$('#about').on('click', function(){
  $('#projects').hide();
  $('#about-me').fadeIn();
});

$('.icon-home').on('click', function(){
  $('#about-me').hide();
  $('#projects').fadeIn();
});


