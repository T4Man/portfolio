$(function(){

  $('#audioStuff').hide();

  $('#whiteGlobe').click(function(){
    $('#audioStuff').fadeToggle(500);
  });

  $('.audioLinks').focus(function(){
    $('#audioStuff').show();
  });



});
