$(document).ready(function () {
  $(".sample").find("span").last().replaceWith($(".sample").find("span").first().text());
  $(".sample").find("p").last().replaceWith($(".sample").find("span").first().text());
});	