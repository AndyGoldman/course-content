$(document).ready(function () {
	var disabled = $('#firstButton').attr("option", "disabled");
	$('#firstButton').attr("disabled", true);
	$('#secondButton').click(function () {
		$('button:disabled').toggle().attr("disabled");
	});
		console.log('Step 1');
});