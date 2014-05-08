$(document).ready(function(){
		$('.sandbox p:nth-child(2)').css('color','red');
			console.log('Step 1');
		$('.sandbox p:nth-child(1)').css('background-color','red');
			console.log('Step 2');
		$('.sandbox p:nth-child(3)').remove();
			console.log('Step 3');
});
		//*$('div.sandbox p').css({'border-width': '2px','border-style': 'solid', 'border-color': 'rgba(255,255,128,0.8)'});
		//*$('.sample').children('.firstParagraph').children('.nextText').text(word);