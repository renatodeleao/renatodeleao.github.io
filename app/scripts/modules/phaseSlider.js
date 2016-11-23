/*
http://stackoverflow.com/questions/28608587/remove-a-class-that-start-with
helper for removing classes that start with is-somehting--
*/

function removeClassByPrefix(el, prefix) {
    var regx = new RegExp('\\b' + prefix + '.*?\\b', 'g');
    el.className = el.className.replace(regx, '');
    return el;
};


function initPhaseSlider(){
	var menu = document.querySelectorAll('[data-js-swiper-nav]')[0];
	var navTriggers = menu.querySelectorAll('[data-js-swiper-trigger]');

	/* Active state on nav */
	var setNavActiveState = function(event, swiperIndex){
			if (event) {
  			var ev = event; 
			ev.preventDefault();
			var self = ev.currentTarget;
			var selfNavItem = ev.target.parentNode;

			/* skip if already current */
			if (self.classList.contains('is-current') ) {
				return false;
			}

			/* remove other current*/
			menu.querySelector('.is-current').classList.remove('is-current');
			menu.querySelector('.is-current-index').classList.remove('is-current-index');
			
			/* set current */
			selfNavItem.classList.add('is-current-index')
			self.classList.add('is-current');

			/* We already passed through it */
			if (!self.classList.contains('is-not-a-virgin') ) {
				self.classList.add('is-not-a-virgin');
				self.parentNode.classList.add('is-not-a-virgin');
				self.classList.remove('is-wireframed');	
				self.classList.remove('is-wireframed-inverse');	
			}
			
		} else {
			var targetNavTrigger = navTriggers[swiperIndex];

			if (targetNavTrigger.classList.contains('is-current')){
				return false;
			}

			/* dealing with reval icon animation*/
			if (!targetNavTrigger.classList.contains('is-not-a-virgin')){
				targetNavTrigger.classList.add('is-not-a-virgin');
				targetNavTrigger.parentNode.classList.add('is-not-a-virgin');
				targetNavTrigger.classList.remove('is-wireframed');
				targetNavTrigger.classList.remove('is-wireframed-inverse');
			}

			if (menu.querySelector('.is-current')){
				menu.querySelector('.is-current').classList.remove('is-current');
				menu.querySelector('.is-current-index').classList.remove('is-current-index');
			}			
			
			/* set current*/
			targetNavTrigger.parentNode.classList.add('is-current-index');
			targetNavTrigger.classList.add('is-current');
		}
    };

    /* Swipe on Click Function */
	var swipeToCurrentSlide = function(event){
		var ev = event;
    	var clickedNode = ev.target.parentNode;
    	var nodeList = Array.prototype.slice.call( menu.children );
    	var clickedNodeIndex = nodeList.indexOf( clickedNode );

    	/* mySwiper.slideTo(index, speed, runCallbacks)*/
    	/* swiper is not zero based*/
    	mySwiper.slideTo(clickedNodeIndex + 1); 
    };

    /* Both setActiveState and swipe */
	var setCurrent = function(event) {
		setNavActiveState(event);
		swipeToCurrentSlide(event);
	};

		var mySwiper = new Swiper ('[data-js-swiper-container]', {
	    /* Optional parameters */
	    direction: 'horizontal',
	    speed: 600,
	    loop: true,
	    parallax: true,
	    keyboardControl: true,
	    paginationClickable: true,
	    grabCursor: true,
	    
	    /* If we need pagination */
	    pagination: '[data-js-swiper-pagination]',
	    paginationClickableClass: 'is-clickable',
	    bulletClass: 'c-slider__pagination-bullet',
		bulletActiveClass: 'is-active',

	    // Navigation arrows
	    nextButton: '[data-js-swiper-button-next]',
	    prevButton: '[data-js-swiper-button-prev]',
	    buttonDisabledClass: 'is-disabled',
	    onSlideChangeEnd: function(swiper){
        	var activeIndex = parseInt(swiper.realIndex);
        	setNavActiveState(null, activeIndex);
        },
        onInit: function(swiper){
        	var activeIndex = swiper.realIndex;
        	setNavActiveState(null, activeIndex);
        }
  	});


    /* Add Event Listeners*/
	[].slice.call(navTriggers).forEach(function(el) {
		var self = el;
		el.addEventListener('click', function(ev){
			setCurrent(ev, false);
		});
	});
};