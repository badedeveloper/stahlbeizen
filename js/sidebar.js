function myFunction(x) {
	x.classList.toggle("change");
	document.getElementById("navbar").classList.toggle("show");
	}
	
	var sidebar = document.getElementsByClassName("navbar");
	
	var i;
	for(i=0; i < sidebar.length; i++) {
	var close = sidebar[i];
	
	if (close.classList.contains('')) {
	close.classList.remove('show');
	}
	}