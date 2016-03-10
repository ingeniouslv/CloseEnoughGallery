'use strict';

function boxTitleSize() {
	$('.ce-box-title').each(function() {
		$(this).css('width', $(this).closest('.ce-box-content').children('.ce-box-image').height());
	});
}

$(function() {
	$('.ce-logo, .ce-name-text').click(function() {
		$('.ce-site-menu').toggleClass('active');
	});
	boxTitleSize();
	$('.ce-select').selectOrDie();
});

$(window).resize(function() {
	boxTitleSize();
});