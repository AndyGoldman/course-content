$(document).ready(function () {
 //* $(".sample").find("span").last().replaceWith($(".sample").find("span").first().text());
  //*$(".sample").find("p").last().replaceWith($(".sample").find("span").first().text());
//*});	

	var word = $('.sample').children('.firstParagraph').children('.targetText').text();
		console.log(word);
	$('.sample').children('.firstParagraph').children('.nextText').text(word);
	$('.sample').children('.emptyText').text(word);
});