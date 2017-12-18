(function() {
	"use strict";

	var header = document.querySelector(".hamburger");

	//check if there is a header
	if(!header) {
		return;
	}

	var hamburger = header.querySelector(".hamburger__trigger"),
		menu = document.querySelector(".hamburger__wrapper");

	if(!hamburger || !menu) {
		return;
	}

	var close = header.querySelector(".hamburger__exit");

	hamburger.addEventListener("click", menuBehaviour);
	close.addEventListener("click", closeBehaviour);

	function menuBehaviour() {
		menu.classList.add("active");
	}

	function closeBehaviour() {
		menu.classList.remove("active");
		console.log("close");
	}

})();
