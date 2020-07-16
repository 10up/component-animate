;(function() {

	// remove no-js and add js to the HTML
	document.documentElement.className = document.documentElement.className.replace( 'no-js', ' ' );
	document.documentElement.className += ' js ';

	var exampleSection = document.getElementById('example-section');
	var exampleImage = document.getElementById('example-image');

	observerSection = new IntersectionObserver( ( entry, observerSection ) => {
		if (entry[0].intersectionRatio > 0) {
			exampleSection.querySelectorAll('div')[0].classList.add('slide-in-left');
			exampleSection.querySelectorAll('div')[1].classList.add('slide-in-right');
			exampleSection.querySelectorAll('div')[0].classList.add('duration-1000');
			exampleSection.querySelectorAll('div')[1].classList.add('duration-1000');
		}
	} );

	observerImage = new IntersectionObserver( ( entry, observer ) => {
		if (entry[0].intersectionRatio > 0) {
			exampleImage.classList.add('fade-in');
			exampleImage.classList.add('duration-1000');
			exampleImage.classList.add('delay-500');
		}
	} );

	observerSection.observe(exampleSection);
	observerImage.observe(exampleImage);

})();
