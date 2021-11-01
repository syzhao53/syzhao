const captions = ["ALL TEENS RELATE", 
					"MEMES THAT DESCRIBE MY LIFE", "HOW RARE ARE YOU?",
					"THING PEOPLE ARE SUSPICIOUS OF", "LET THAT SINK IN",
					"THINGS YOU CAN'T UNSEE", "FACTS TO SAVE YOUR LIFE",
					"NO HUMAN HAS EVER SEEN",
					"GEN Z AS PARENTS", "STOP SAYING THIS TO MEN",
					"THE PRETTIEST WORDS EVER", "YOU JUST REALIZED...",
					"FUN JOBS THAT PAY WELL", "ADMIT IT (CHILDHOOD EDITION)",
					"YOU JUST REALIZED", "THROWBACK TO 2010",
					"BEST YEARBOOK QUOTES", "ISN'T IT WEIRD TO THINK THAT",
					"ONLY SHY PEOPLE RELATE", "THINGS THAT HIT DIFFERENT",
					"UNPOPULAR OPINIONS", "CUTE CONTACT NAMES FOR",
					"CLEVER AND FUNNY SIGNS", "PICTURES YOU WEREN'T MEANT TO SEE",
					"WHOLESOME THOUGHTS", "LIFE CHANGERS FOR LADIES",
					"KARDASHIAN QUOTES TO LIVE BY", "LET ME CHANGE YOUR PERSPECTIVE",
					"DUMBEST THINGS PEOPLE SAY", "WAIT WHAT...", 
					"STRANGE THINGS THAT EXIST", "EMOJIS WE NEED", 
					"ACTUALLY USEFUL LIFE HACKS", "DID YOU KNOW THAT...",
					"RANDOM MEMES I SAVED", "SPONTANEOUS THINGS TO DO",
					"BUILD A BOYFRIEND/GIRLFRIEND", "CRAZY PSYCHOLOGY FACTS",
					"GROWING UP AS A GIRL", "HILARIOUS STUDENT ANSWERS",
					"DEEP SHOWER THOUGHTS", "JOBS THAT SHOULD BE REAL",
					"THINGS EVERYONE DOES", "FACTS THAT WILL HAUNT YOU"];

let counter = 0;
let text = document.querySelector(".caption");
let galleryButton = document.querySelector(".gallery-button");
let captionCol = document.querySelector(".caption-col");
let imageCol = document.querySelector(".image-col");

let galleryToggle = false;



function captionNext() {
	console.log("next");
		console.log(counter);
	console.log(text.innerHTML);

	if (counter == captions.length - 1) {
		counter = 0;
	} else {
  		counter++;
	}

		text.innerHTML= captions[counter];

}

function captionBack() {
	console.log("back");
			console.log(counter);

	console.log(text.innerHTML);

	if (counter == 0) {
		counter = captions.length - 1;
	} else {
  		counter--;
	}

		text.innerHTML= captions[counter];

} 

function switchGalleryView() {
	console.log("gallery");

	if (!galleryToggle) {
		captionCol.remove();
		galleryToggle = true;
	} else if (galleryToggle) {
		document.body.appendChild(captionCol);
		galleryToggle = false;
	}

	imageCol.classList.toggle("image-col-gallery");
	// get all image cell images and add the hovering image cell gallery class
}

text.addEventListener("click", captionNext);
// text.addEventListener("dblclick", captionBack);

// up down should probably be reserved for scroll

document.addEventListener("keyup", (e) => {
	if (e.code === "ArrowLeft" || e.code === "ArrowUp") {
		captionBack();
	} else if (e.code === "ArrowRight" || e.code === "ArrowDown") {
		captionNext();
	}
}); 

galleryButton.addEventListener("click", switchGalleryView);

