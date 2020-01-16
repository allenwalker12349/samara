
$(document).ready(function(){

	var serchOverlay = $('.search-popup');
	var closeBtn = $('.search-popup__close-btn');
	var searchInput = $('.navigation__search');

	var burger = $('.main-nav__burger-container');
	var menu = $('.main-nav')
	var mute = $('.mute');

	if (document.body.clientWidth < 1140) {
		menu.toggle();
	};

  $('.links__carousel').slick({
		infinite: true,
		draggable:true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		arrows: true,
		swipe: true,
		appendArrows: $('.links__buttons-container'),
		responsive: [{
			breakpoint: 575,
			settings: {
				arrows: false
			}
		}]
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
				arrows: false,
				dots: true,
				appendDots: $('.slider')
				}
			}
		]
	});

	$('.slider__important-information').slick({
		arrows:true,
		draggable:true,
		infinite:true,
		swipe:true,
		appendArrows: $('.important-information__arrows-container'),
		responsive: [
			{
			breakpoint: 575,
			settings: {
				arrows: false,
				dots: true,
				appendDots: $('.slider__important-information')
				}
			}
		]
	});

	$('.open-news__slider-container').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		draggable:true,
		infinite:true,
		swipe:true,
		arrows: true, 
		appendArrows: $('.open-news__arrows-container'),
		responsive: [
			{
			breakpoint: 575,
			settings: {
				arrows: false,
				centerMode: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false
				}
			}
		]
	});

	$('.gallery-inner__slider').slick({
		centerMode: true,
		slidesToShow: 1,
		adaptiveHeight: false,
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
					slidesToShow: 1,
					centerMode: false
				}
			}
		]
	});

	$('.gallery-inner__slider').slick({
		centerMode: true,
		slidesToShow: 1,
		autoplay: true,
  	autoplaySpeed: 4000,
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

	if ($(window).width() <= 575) {
		$('.social-programms__items-container').slick({
			infinite: true,
			arrows: false,
			dots: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			centerMode: true,
			variableWidth: true
		});
	};

	$( "#tabs" ).tabs();

	$('.navigation__search-icon').on('click', function() {
		serchOverlay.css('display', 'flex');
		mute.css('display', 'block');
		serchOverlay.animate({
			opacity: 1
		}, function () {
			searchInput.animate({
				width: '80%'
			});
		});

		closeBtn.css('display', 'flex');

		closeBtn.animate({
			opacity: 1
		});
	});

	closeBtn.on('click', function () {
		closeBtn.css('display', 'none');
		mute.css('display', 'none');
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

	$( "#appointmentDate" ).datepicker({
		dateFormat: "dd.mm.yy",
		minDate: 0,
		autoSize: true,
		maxDate: '+1m',
		dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
		firstDay: 1,
		nextText: "→",
		prevText: "←",
		monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ]
	});

	$( "#appointmentTime" ).selectmenu()
	.selectmenu( "menuWidget" )
	.addClass( "overflow" );
	
	$( "#typeOfService" ).selectmenu();
	$( "#service" ).selectmenu();
	$('.news__archive-select').selectmenu();


	var sliderProgressBar = $('.progressBar');

	var sliderProgress = function () {
		resetProgress();
		sliderProgressBar.animate({
			height: '100%'
		}, 8000, function (){
			$('.slider').slick('slickNext');
			$('.slider__important-information').slick('slickNext');
			resetProgress();
		});
	};

	var resetProgress = function () {
		sliderProgressBar.css('height', '1%');
	}



	var startSliderProgress = setInterval(sliderProgress, 8000);


});	