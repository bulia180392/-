$(function(){

	$('.btn_menu').click(function(){
		$('.menu ul').slideToggle();
	});

	$('.box_slider').slick({
		dots: true,
		prevArrow: false,
		nextArrow: false,
	});

	$(".menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 4000);
	});

	$('.post').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 100
	});

});