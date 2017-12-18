(function() {
	"use strict";

	let elements = {
			Static: document.querySelectorAll('.fadeIn'),
			Up: document.querySelectorAll('.fadeInUp'),
			Down: document.querySelectorAll('.fadeInDown'),
			Left: document.querySelectorAll('.fadeInLeft'),
			Right: document.querySelectorAll('.fadeInRight')
		};
	let	w = window;

	if(!elements) {
		return;
	}

	w.addEventListener('scroll', setAnimationFrame, false);

	setAnimations();
	function setAnimationFrame() {
		w.requestAnimationFrame(setAnimations);
	}


	function setAnimations() {
		for (let direction in elements) {
			if(elements.hasOwnProperty(direction)) {


				for(let i = 0; i < elements[direction].length; i++) {
					fadeOnShow(elements[direction][i], direction);
				}
			}
		}
	}


	function fadeOnShow(el, direction) {
		let animateMin = checkPosition(el);


		if(animateMin) {
			el.classList.add('fadeIn' + direction + '--animate');
			// el.classList.remove('fadeIn' + direction + '--hidden');
		} else {
			// el.classList.add('fadeIn' + direction + '--hidden');
		}

	}

	function checkPosition(element) {

		let rect = element.getBoundingClientRect(),
			viewHeight = Math.max(document.documentElement.clientHeight, w.innerHeight) / 1.2;

		return !(rect.bottom < 0 || rect.top - viewHeight >= 0);

	}

	// if(elements.length <= 0) {
	// 	return;
	// }

	// elements.forEach(function(el) {
	// 	console.log(el);

	// 	let pageOffset = window.pageYOffset;

	// 	let element = {
	// 		up: el.classList.contains("fadeIn--up"),
	// 		down: el.classList.contains("fadeIn--down"),
	// 		left: el.classList.contains("fadeIn--left"),
	// 		right: el.classList.contains("fadeIn--right")
	// 	}

	// 	for (var direction in element) {
	// 		if(element[direction]) {
	// 			console.log(direction);
	// 		}
	// 	}

	// 	console.log(pageOffset);

	// 	// let elementLeft = el.classList.contains('fadeIn--left');

	// 	// console.log(elementLeft);
	// });

	// window.addEventListener('scroll', () => {
	// 	let scrollPosition = window.scrollY || window.pageYOffset;

	// 	console.log(scrollPosition);

	// });


})();
