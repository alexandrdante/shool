var month=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
function getTodayAndTomorrowDateString() {
	var today = new Date(),
		tomorrow = new Date();
	tomorrow.setDate(today.getDate() + 1);
	return today.getDate() + (today.getMonth() !== tomorrow.getMonth() ? " " + month[today.getMonth()] : "") + " и " + tomorrow.getDate() + " " + month[tomorrow.getMonth()];
}

window.addEventListener("DOMContentLoaded", function() {
	var str = getTodayAndTomorrowDateString();
	Array.prototype.forEach.call(document.querySelectorAll(".__TaTdate"), function(node) {
		node.textContent = str;
	});
});