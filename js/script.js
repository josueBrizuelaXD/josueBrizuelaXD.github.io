
function activeLink(id) {
	
	
	console.log(id);
	var navLinks = document.getElementsByClassName("nav-link");
	for(var i = 0; i < navLinks.length; i++) {
		var navLink = navLinks[i];
		navLink.style.color = "#E2E2E2";
	}
	var el = document.getElementById(id);
	console.log(el);
	el.style.color = "white";
}

