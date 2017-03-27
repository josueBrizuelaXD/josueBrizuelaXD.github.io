






function filterProjects(id) {
	var projectLinks = document.querySelectorAll(".project-menu > button")
	
	
	for (var i =0; i < projectLinks.length; i++) {
		var projL = projectLinks[i];
		projL.removeAttribute("class");
	
		}
		
		
	
	
	id.setAttribute("class", "btn-active");
	var webCards = document.getElementsByClassName("web");
	var iCards = document.getElementsByClassName("iOS");
	
	switch (id.innerHTML) {
		case "iOS":
			
			
			for (var j = 0; j < webCards.length; j++) {
				var webCard = webCards[j];
				webCard.style.display = "none";
			}
			
			for (var t = 0; t < iCards.length; t++) {
				var iCard = iCards[t];
				iCard.style.display = "inline-block";
			}
			
			break;
			
		case "Web":
			
			
			for (var w = 0; w < iCards.length; w++) {
				var iCard = iCards[w];
				iCard.style.display = "none";
			}
			
			for (var p = 0; p < webCards.length; p++) {
				var webCard2 = webCards[p];
				webCard2.style.display = "inline-block";
			}
			
		  	break;
		default:
			
	
		for (var r = 0; r < iCards.length; r++) {
				var iCard = iCards[r];
				iCard.style.display = "inline-block";
			}
			
			for (var s = 0; s < webCards.length; s++) {
				var webCard2 = webCards[s];
				webCard2.style.display = "inline-block";
			}	
			
	}
	
}


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

