$(function(){
	$cardHeight = $('.card').height();
	$logoWidth = $('.logo').width();
	
	$wrapperHeight = $cardHeight*2
	$cardWidth = $logoWidth+80
	
	console.log($cardHeight, $logoWidth);
	
	$('.wrapper').css('height', $cardHeight);
	$('.card').css('width', $cardWidth);
});
