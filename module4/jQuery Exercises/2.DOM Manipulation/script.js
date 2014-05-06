$(document).ready(function (){
		$('p').css('color','red');
		$('div.sandbox').css({'background-color':'rgba(255,255,0,0.2)'});
		$('div.sandbox p').css({'border-width': '2px','border-style': 'solid', 'border-color': 'rgba(255,255,128,0.8)'});
		$('.sandbox li:first-child').text("This is new text");
		$('.sandbox li:nth-child(2)').text("This is newer text");
		$('.sandbox li:nth-child(3)').text("This is even newer text");
		$('.sandbox li:nth-child(4)').text("This is the newest text");
	});