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