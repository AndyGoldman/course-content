$(document).ready(function (){
		$('ul li').mouseenter(function (){
		$(this).addClass('update');
	});
		$('ul li').mouseleave(function (){
		$(this).removeClass('update');
	});
