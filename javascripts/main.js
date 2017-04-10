var loveButton = $("#love-button");
var showLove = $("#love-pic");

loveButton.click(showMeLove);

function showMeLove() {
	loveButton.addClass("hidden");
	showLove.removeClass("hidden");
}