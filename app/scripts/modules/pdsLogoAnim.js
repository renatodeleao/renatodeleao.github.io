var pdsLogoAnim = function(){
	var logo = document.querySelectorAll('[data-pds-logo]')[0];
	var logoPaths = logo.querySelectorAll('[data-js-logo-path]');

	/* trigger reveal css animation*/
	logo.classList.add('js-animated');

	[].slice.call(logoPaths).forEach(function(el){
		el.addEventListener('mouseenter', function(e){
			if (this.classList.contains('is-visited')){
				return false;
			}
			this.classList.add('is-visited');
		}, {once: true });
	});
};