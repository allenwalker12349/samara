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
		responsiveClass:true,
		margin:200,
		navContainerClass: 'important-information__buttons-container',
		navClass: ['slide-btn slide-btn--prev', 'slide-btn slide-btn--next'],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
	});

	$('.slider').slick({
		arrows:true,
		dots:true,
		draggable:true,
		infinite:true,
		swipe:true,
		appendDots: $('.slider__text-content')
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


});	