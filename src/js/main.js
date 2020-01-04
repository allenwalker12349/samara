$(document).ready(function(){

	var serchOverlay = $('.search-popup');
	var closeBtn = $('.search-popup__close-btn');
	var searchInput = $('.navigation__search');

	var burger = $('.main-nav__burger-container');
	var menu = $('.main-nav')

	if (document.body.clientWidth < 1140) {
		menu.toggle();
	}

  $('.owl-carousel').owlCarousel({
		loop:true,
		center: true,
		responsiveClass:true,
		navContainerClass: 'important-information__buttons-container',
		navClass: ['slide-btn slide-btn--prev', 'slide-btn slide-btn--next'],
    responsive:{
        0:{
						items:1,
						center: true,
						nav:false,
						loop:true
        },
        700:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
				}
			}
	});

	$('.slider').slick({
		draggable:true,
		infinite:true,
		swipe:true,
		slidesToShow: 1,
		responsive: [
			{
			breakpoint: 575,
			settings: {
				arrows: false
				}
			}
		]
	});

	if ($(window).width() <= 575) {
		$('.social-programms__items-container').slick({
			infinite: true,
			arrows: false,
			dots: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			centerMode: true,
			variableWidth: true,
		});
	}

	$('.gallery-inner__slider').slick({
		centerMode: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});

	$('.slider__important-information').slick({
		arrows:true,
		draggable:true,
		infinite:true,
		swipe:true,
		appendArrows: $('.important-information__arrows-container')
	});

	$('.gallery-inner__slider').slick({
		centerMode: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});

	$( "#tabs" ).tabs();

	$('.navigation__search-icon').on('click', function() {
		serchOverlay.css('display', 'flex');
		serchOverlay.animate({
			opacity: 1
		}, function () {
			searchInput.animate({
				width: '54%'
			});
		});

		closeBtn.css('display', 'flex');

		closeBtn.animate({
			opacity: 1
		});
	});

	closeBtn.on('click', function () {
		closeBtn.css('display', 'none');
		searchInput.animate({
			width: '0'
		}, 400);

		closeBtn.animate({
			opacity: 0
		}, 200);
		serchOverlay.animate({
			opacity: 0
		}, 400, function () {
			serchOverlay.css('display', 'none');
		});
	});

	burger.on('click', function () {
		menu.slideToggle();
	});

	$( "#appointmentDate" ).datepicker();

	$( "#appointmentTime" ).selectmenu()
	.selectmenu( "menuWidget" )
	.addClass( "overflow" );
	
	$( "#typeOfService" ).selectmenu();

});	