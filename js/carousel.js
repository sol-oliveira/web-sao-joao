$(document).ready(function () {
	$('#carousel_ul li:first').before($('#carousel_ul li:last'));
	var time = setInterval('slide("right")', 0);
});

function slide (where) {
	var item_width = $('#carousel_ul li').outerWidth() + 10;
	var left_indent = parseInt($('#carousel_ul').css('left')) - item_width;
	$('#carousel_ul:not(:animated)').animate(
		{'left' : left_indent},
		5000,
		function () {
			$('#carousel_ul li:last').after($('#carousel_ul li:first'));
			$('#carousel_ul').css({'left' : '0px'});
		}
	);
}