$(document).ready(function(){
		$('.sandbox p:nth-child(2)').css('color','red');
			console.log('Step 1');
		$('.sandbox p:nth-child(1)').css('background-color','red');
			console.log('Step 2');
		$('.sandbox p:nth-child(3)').remove();
			console.log('Step 3');
		$('.sandbox ul li:nth-child(4)').css('color','red');
			console.log('Step 4');
		$('.sandbox ul li:nth-child(2)').text('I did it!');
			console.log('Step 5');
});
