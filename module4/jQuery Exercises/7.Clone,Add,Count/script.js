$(document).ready(function(){
	$('button.add-item').click(function(){
		var repeat = $('#numberToAdd').val();
		for(var i = 1; i<=repeat; i++){
    $('.template li').clone().text('You rock!').appendTo('.sample-list');
			console.log('Step 1');
		$('.count').text(i);	
			};
	});
});