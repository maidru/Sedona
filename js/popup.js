var link = document.querySelector("#dropfilter");
var popup = document.querySelector(".drop-form");
var close = popup.querySelector(".drop-form");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.toggle("drop-form-show");
});