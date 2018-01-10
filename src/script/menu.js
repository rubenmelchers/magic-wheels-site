(function() {
	"use strict";

    let menu = document.querySelector('.navigation'),
        w = window;

    if(!menu) {
        return;
    }

    let introSection = document.querySelector('#intro');
    let navParent = document.querySelector('.navigation__parent');

    if(!introSection || !navParent) {
        return;
    }

    let maxNavPos = introSection.clientHeight;
    maxNavPos += (menu.clientHeight / 2);

    w.addEventListener('scroll', changeNav);


	function changeNav(){

        let offset = window.pageYOffset | document.body.scrollTop;

        if(offset >= maxNavPos) {
            menu.classList.add('navigation--small');
            menu.classList.remove('container');
            navParent.classList.add('container');
        } else {
            menu.classList.remove('navigation--small');
            menu.classList.add('container');
            navParent.classList.remove('container');
        };
        // console.log("scrolling");

		// let scrollPosY = window.pageYOffset | document.body.scrollTop;
        //
		// if(scrollPosY > 100) {
		// 	menu.classList.add('navigation__scrolling');
		// } else if(scrollPosY <= 100) {
		// 	menu.classList.remove('navigation__scrolling');
		// }

	}
})();
