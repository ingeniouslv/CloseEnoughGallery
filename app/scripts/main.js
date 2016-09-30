'use strict';

function boxTitleSize() {
	$('.ce-box-title').each(function() {
		$(this).css('width', $(this).closest('.ce-box-content').children('.ce-box-image').height());
	});
}

// function moveWeight() {
// 	$('.ce-container').masonry({
// 		itemSelector: '.ce-box',
// 		percentPosition: true,
// 		gutter: 144
// 	});
// }

$(function() {
	$('.ce-logo, .ce-name-text').click(function() {
		$('.ce-site-menu').toggleClass('active');
	});
	boxTitleSize();
	// moveWeight();
	$('.ce-select').selectOrDie();
});

$(window).resize(function() {
	boxTitleSize();
});