(function() {
	"use strict";
	
	window.onscroll = function changeNav(){
		var navigation = document.querySelector(".js-navigation");
		var scrollPosY = window.pageYOffset | document.body.scrollTop;
		
		if(scrollPosY > 100) {
			navigation.classList.add('navigation__scrolling');
		} else if(scrollPosY <= 100) {
			navigation.classList.remove('navigation__scrolling');
		}
		
	}
})();