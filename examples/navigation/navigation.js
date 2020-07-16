;(function() {

	// remove no-js and add js to the HTML
	document.documentElement.className = document.documentElement.className.replace( 'no-js', ' ' );
	document.documentElement.className += ' js ';

	// Get toggle button
	var toggle = document.getElementById( 'e-nav__toggle' );

	 // set up the UI
	setUpUi( toggle );

	// Bind events
	toggle.addEventListener( 'click', toggleMenu, false );

	// ESC to close the menu
	document.addEventListener( 'keydown', function(e) {

		var toggle = document.getElementById( 'e-nav__toggle' );
		if(e.keyCode === 27 && toggle.getAttribute('aria-expanded') === 'true') {
			closeMenu(toggle);
		}

	}, false);

	/**
	 * Toggle the menu
	 */
	function toggleMenu(e) {

		var toggle = e.target;
		var controls = toggle.getAttribute('aria-controls');
		var target = document.getElementById(controls);
		var firstLink = target.querySelector('a');

		if(target.getAttribute('aria-hidden') === 'true') {
			openMenu(toggle);
		} else {
			closeMenu(toggle);
		}

	}

	/**
	 * Open the menu
	 */
	function openMenu(toggle) {

		var controls = toggle.getAttribute('aria-controls');
		var target = document.getElementById(controls);
		var firstLink = target.querySelector('a');
		var listItems = target.querySelectorAll('li');
		var delay, i;

		toggle.setAttribute('aria-expanded', 'true');
		target.setAttribute('aria-hidden', 'false');

		target.classList.add('slide-in-left');
		target.classList.add('duration-150');
		target.classList.add('timing-linear');

		for (i = 0; i < listItems.length; i = i + 1) {
			delay = (i * 50) + 200;
			listItems[i].classList.add('fade-in');
			listItems[i].classList.add('duration-150');
			listItems[i].classList.add('delay-' + delay);
		}

		firstLink.focus();

	}

	/**
	 * Close the menu
	 */
	function closeMenu(toggle) {

		var controls = toggle.getAttribute('aria-controls');
		var target = document.getElementById(controls);

		toggle.setAttribute('aria-expanded', 'false');
		target.setAttribute('aria-hidden', 'true');

		target.classList.remove('slide-in-left');
		target.classList.remove('duration-150');
		target.classList.remove('timing-linear');

		toggle.focus();
	}

	/**
	 * set up UI
	 */
	function setUpUi( toggle ) {

		var controls = toggle.getAttribute('aria-controls');
		var target = document.getElementById(controls);

		toggle.setAttribute('aria-expanded', 'false');
		target.setAttribute('aria-hidden', 'true');

	}

})();
