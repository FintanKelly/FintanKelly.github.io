// This searches for any element with the 'toggle' class and either hides or unhides it.
function toggleSection(id) {
	if (document.getElementById(id)) {
		var divID = document.getElementById(id);
		var divArray = document.getElementsByClassName("toggle");

		for (var i = 0; i < divArray.length; i++) {
			divArray[i].style.display = "none";
		}

		divID.style.display = "block";
	}

	return false;
}

// Pulled from: https://stackoverflow.com/questions/17534661/make-anchor-link-go-some-pixels-above-where-its-linked-to
// The function actually applying the offset
function offsetAnchor() {
	if (location.hash.length !== 0) {
		window.scrollTo(window.scrollX, window.scrollY - 80);
	}
}

// Captures click events of all <a> elements with href starting with #
$(document).on('click', 'a[href^="#"]', function(event) {
	// Click events are captured before hashchanges. Timeout
	// causes offsetAnchor to be called after the page jump.
	window.setTimeout(function() {
		offsetAnchor();
	}, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);