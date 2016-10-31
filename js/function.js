$(function(){
  $cardwidth = $('.card').width();

  console.log($cardwidth)

  $('.login').css('width' , $cardwidth);
  $('.welcome').css('width' , $cardwidth);
  $('.register').css('width' , $cardwidth);
  
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