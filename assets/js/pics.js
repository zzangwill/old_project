
let carouselWidth = 500; 


let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("section1");


let imageNum = 0;


function showNextImage() {
	
imageNum = imageNum+ 1;
	
let Pixells = imageNum * carouselWidth;
	
imageRow.style.left = (-1) * Pixells;
checkControls();
}


nextButton.onclick = showNextImage;


function showPrevImage() {

imageNum = imageNum - 1;
	
let Pixels2 = imageNum * carouselWidth;
	
imageRow.style.left = (-1) * Pixels2;
checkControls();
}


prevButton.onclick = showPrevImage;


let totalImages = document.getElementsByClassName("section-image").length;



function checkControls() {
	
	if (imageNum === 0) {
		
		prevButton.classList.add("hidden");
	}
	else if (prevButton.classList.contains("hidden")) {
		
		prevButton.classList.remove("hidden");
	}

	if (imageNum === 5) {
		
		nextButton.classList.add("hidden");
	}
	else if (nextButton.classList.contains("hidden")) {
	
		nextButton.classList.remove("hidden");
	}
} 

