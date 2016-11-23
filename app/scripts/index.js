//=require aos/dist/aos.js
//=require modules/pdsLogoAnim.js
//=require swiper/dist/js/swiper.min.js
//=require modules/phaseSlider.js

document.addEventListener("DOMContentLoaded", function(){	
	(function(){
		/* in case library fails to load */
		if (window.AOS == undefined){
			document.getElementsByTagName('body')[0].classList.add('no-aos');
			return false;
		}
		AOS.init();
	})();
	/* logo anim*/
	pdsLogoAnim(); 
	/* init slider */
	initPhaseSlider();
});
