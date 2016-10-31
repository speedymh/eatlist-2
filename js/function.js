$(function () {
  $cardwidth = $('.card').width();

  console.log($cardwidth);

  $('.login-site').css('width' , $cardwidth);
  $('.welcome-site').css('width' , $cardwidth);
  $('.register-site').css('width' , $cardwidth);
  
  $('.left').on('click', function(){
    $('.wrapper').removeClass('slideright');
    $('.wrapper').addClass('slideleft');
  });
  
  $('.center').on('click', function(){
    $('.wrapper').removeClass('slideleft');
    $('.wrapper').removeClass('slideright');
  });
  
  $('.right').on('click', function(){
    $('.wrapper').removeClass('slideleft');
    $('.wrapper').addClass('slideright');
  });
  
});