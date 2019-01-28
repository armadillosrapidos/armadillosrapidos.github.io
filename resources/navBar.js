var baseUrl = "dfsek.github.io";
if(window.location.port === "" || !window.location.port) {
	baseUrl = window.location.protocol + "//" + window.location.hostname;
} else {
	baseUrl = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;
}
console.log("base URL: " + baseUrl);
var navBarHTML = '<div id="mySidenav" class="sidenav"> <a href="#" class="closebtn" onclick="closeNav()">&times;</a> <a href="' + baseUrl + '">Pagina Principal</a> <a href="' + baseUrl + '/lugares">Lugares</a><a href="' + baseUrl + '/lugares/sancristobal"><div class="navBarPadding">La Colina de San Cristóbal</div></a><a href="' + baseUrl + '/lugares/mercadocentral"><div class="navBarPadding">El Mercado Central de Santiago</div></a><a href="' + baseUrl + '/lugares/sanlucia"><div class="navBarPadding">La Colina de San Lucia</div></a><a href="' + baseUrl + '/lugares/plazadearmas"><div class="navBarPadding">La Plaza de Armas</div></a><a href="' + baseUrl + '/lugares/parque"><div class="navBarPadding">El Parque Metropolitano</div></a><a href="' + baseUrl + '/lugares/zoo"><div class="navBarPadding">El Zoológico de Santiago</div></a><a href="' + baseUrl + '/itinerarios">Itinerarios</a><a href="' + baseUrl + '/conclusion">Conclusion</a></div>';


$(document).ready(function() {
	"use strict";
	document.getElementById("navBarContainer").innerHTML = navBarHTML;
	console.log("navbar is loaded.");
	document.getElementById("main").style.marginLeft = "60px";
	document.getElementById("nav").style.width = "60px";
});

function openNav() {
	"use strict";
	document.getElementById("mySidenav").style.width = "360px";
	document.getElementById("main").style.marginLeft = "360px";
	var main = document.getElementById("main1");
	if(main) {
		document.getElementById("main1").style.marginLeft = "60px";
	}
	main = document.getElementById("main2");
	if(main) {
		document.getElementById("main2").style.marginLeft = "60px";
	}
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
	"use strict";
	document.getElementById("mySidenav").style.width = "0px";
	document.getElementById("main").style.marginLeft = "60px";
	document.getElementById("nav").style.width = "60px";
	var main = document.getElementById("main1");
	if(main) {
		document.getElementById("main1").style.marginLeft = "60px";
	}
	main = document.getElementById("main2");
	if(main) {
		document.getElementById("main2").style.marginLeft = "60px";
	}
}
