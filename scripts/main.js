$('#about-me').hide();

$('#about').on('click', function(){
  $('#intro').hide();
  $('#about-me').fadeIn();
});

$('.icon-home').on('click', function(){
  $('#about-me').hide();
  $('#intro').fadeIn();
});
