$(document).ready(function(){

	var serchOverlay = $('.search-popup');
	var closeBtn = $('.search-popup__close-btn');
	var searchInput = $('.navigation__search');

  $(".owl-carousel").owlCarousel({
		items: 1
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

		closeBtn.animate({
			opacity: 1
		});
	});

	closeBtn.on('click', function () {
		searchInput.animate({
			width: '0'
		}, 200);

		closeBtn.animate({
			opacity: 0
		}, 200);
		serchOverlay.animate({
			opacity: 0
		}, 400, function () {
			serchOverlay.css('display', 'none');
		});
	});


});	