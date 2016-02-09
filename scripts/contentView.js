contentView = {};

contentView.initMainPage = function(){
  ContentConstr.project.forEach(function(a){
    $('#projects').append(a.populateProjects());
  });
};

$('#about-me').hide();

$('#about').on('click', function(){
  $('#projects').hide();
  $('#about-me').fadeIn();
});

$('.icon-home').on('click', function(){
  $('#about-me').hide();
  $('#projects').fadeIn();
});

