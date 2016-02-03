$(function(){

  $('#about').on('click', function(e){
    e.preventDefault();
    $('#my-projects').addClass("hidden");
    if ($('#about-me').hasClass("hidden")){
      $('#about-me').removeClass("hidden");
    } else {
      $('#about-me').addClass("hidden");
    }
  });

  $('#projects').on('click', function(e){
    e.preventDefault();
    $('#about-me').addClass("hidden");
    if ($('#my-projects').hasClass("hidden")){
      $('#my-projects').removeClass("hidden");
    } else {
      $('#my-projects').addClass("hidden");
    }
  });

  $('#self-image').on('click', function(e){
    e.preventDefault();
    if ($('#contact').hasClass("hidden")){
      $('#contact').removeClass("hidden");
      } else {
        $('#contact').addClass("hidden");
      }
  });

});
