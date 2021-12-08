// access and display current time
let date = new Date();
let hour = date.getHours();
let originalHour = hour; // 24 hour time
let minutes = date.getMinutes();
let timeOfDay = "";

if (hour == 0) {
	hour = 12;
} else if (hour > 12) {
	hour -= 12;
}

if (minutes < 10) {
	minutes = "0" + minutes;
}

if (originalHour < 12) { // AM
	timeOfDay += "AM";
} else if (originalHour >= 12) { // PM
	timeOfDay += "PM";
}

// display time
document.getElementById("time").innerHTML = hour + ":" + minutes + " " + timeOfDay;

// let singleImage = document.querySelector(".menu");

// // menu interaction
// let menuSvg = document.querySelector(".menu");

// function openMenu() {

// }

// menuSvg.addEventListener("click", openMenu);



// songs
let songs = new Map();
songs.set(0, "do you know how much i love you");
songs.set(1, "Aubrey Plaza");
songs.set(11, "Winona");
songs.set(12, "All Too Well");
songs.set(13, "1999");
songs.set(14, "Dionne");
songs.set(22, "Watery Brain");
songs.set(23, "Every Colour");

// artists
let artists = new Map();
artists.set(0, "Grady");
artists.set(1, "Nick Ward");
artists.set(11, "Miloe");
artists.set(12, "Taylor Swift");
artists.set(13, "beebadoobee");
artists.set(14, "The Japanese House ft. Justin Vernon");
artists.set(22, "Valley");
artists.set(23, "Luca Fogale");


let frames = new Map();
frames.set(0, "<iframe src=\"https://open.spotify.com/embed/track/7CaGcwpmOrOWSSs38oXcj5?utm_source=generator\" width=\"5.85%\" height" + 
	"=\"80\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>");
frames.set(1, "<iframe src=\"https://open.spotify.com/embed/track/6edAjSENRwFF2ebfkEFXuK?utm_source=generator\" width=\"5.85%\" height" + 
	"=\"80\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>");
frames.set(11, "<iframe src=\"https://open.spotify.com/embed/track/50CrMqvVH178XRNNhhXfTy?utm_source=generator\" width=\"5.85%\" height" + 
	"=\"80\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>");
frames.set(13, "<iframe src=\"https://open.spotify.com/embed/track/0oS6978exXanyIZJD4cdgV?utm_source=generator\" width=\"5.85%\" height" + 
	"=\"80\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>");
frames.set(12, "<iframe src=\"https://open.spotify.com/embed/track/5enxwA8aAbwZbf5qCHORXi?utm_source=generator\" width=\"5.85%\" height" + 
	"=\"80\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>");
frames.set(14, "<iframe src=\"https://open.spotify.com/embed/track/15gL4n95OG5KEQLCMXPQzp?utm_source=generator\" width=\"5.85%\" height" + 
	"=\"80\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>");
frames.set(22, "<iframe src=\"https://open.spotify.com/embed/track/4NYBfPho54Nzsb77hBLK2g?utm_source=generator\" width=\"5.85%\" height" + 
	"=\"80\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>");
frames.set(23, "<iframe src=\"https://open.spotify.com/embed/track/7nNq5Q2Khh1bOyF1QQFLjd?utm_source=generator\" width=\"5.85%\" height" + 
	"=\"80\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>");


if (songs.has(originalHour)) {
	document.getElementById("song").innerHTML = songs.get(originalHour);
} else {
	document.getElementById("song").innerHTML = "Taking a break!";
}

if (artists.has(originalHour)) {
	document.getElementById("artist").innerHTML = "by " + artists.get(originalHour);
}

if (frames.has(originalHour)) {
	console.log("draw frame");
	document.getElementById("frame").innerHTML = frames.get(originalHour);
}

// gradients
if (originalHour == 0) { // do you know how much i love you
	var granimInstance = new Granim({
	   element: '#granim-canvas',
	   name: 'granim',
	   opacity: [1, 1],
	   	//   direction: 'radial',

	   stateTransitionSpeed: 700,
	   states : {
	       "default-state": {
	           gradients: [
	               ['#A0521E', '#260804'],
	               ['#CB742A', '#561E1E']
	           ]
	       }
	   }
	});
} else if (originalHour == 1) { // aubrey plaza
	var granimInstance = new Granim({
	   element: '#granim-canvas',
	   name: 'granim',
	   opacity: [1, 1],
	   stateTransitionSpeed: 00,
	   states : {
	       "default-state": {
	           gradients: [
	               ['#89a38a', '#f0c384'],
	               ['#edc0c0', '#486482']
	           ]
	       }
	   }
	});
} else if (originalHour == 2) {
	var granimInstance = new Granim({
	   element: '#granim-canvas',
	   name: 'granim',
	   opacity: [1, 1],
	   states : {
	       "default-state": {
	           gradients: [
	               ['#834D9B', '#D04ED6'],
	               ['#1CD8D2', '#93EDC7']
	           ]
	       }
	   }
	});
} else if (originalHour == 11) {
	var granimInstance = new Granim({
	   element: '#granim-canvas',
	   name: 'granim',
	   stateTransitionSpeed: 500,
	   opacity: [1, 1],
	   states : {
	       "default-state": {
	           gradients: [
	               ['#3B508A', '#343766'],
	               ['#90a0ab', '#657554']
	           ]
	       }
	   }
	});
} else if (originalHour == 13) {
	var granimInstance = new Granim({
	   element: '#granim-canvas',
	   name: 'granim',
	   stateTransitionSpeed: 1000,
	   opacity: [1, 1],
	   states : {
	       "default-state": {
	           gradients: [
	               ['#bf97a6', '#b86c89'],
	               ['#c6cf8c', '#eddae7']
	           ]
	       }
	   }
	});
} else if (originalHour == 12) {
	var granimInstance = new Granim({
	   element: '#granim-canvas',
	   name: 'granim',
	   stateTransitionSpeed: 1000,
	   opacity: [1, 1],
	   states : {
	       "default-state": {
	           gradients: [
	               ['#140504', '#630700'],
	               ['#a11818', '#210400'],
	               ['#630700', '#140504']
	           ]
	       }
	   }
	});
} else if (originalHour == 14) {
	var granimInstance = new Granim({
	   element: '#granim-canvas',
	   name: 'granim',
	   stateTransitionSpeed: 1000,
	   opacity: [1, 1],
	   states : {
	       "default-state": {
	           gradients: [
	               ['#c5c9d1', '#e8eaed'],
	               ['#f0f2d8', '#c7c7c7'],
	               ['#444547', '#706e73']
	           ]
	       }
	   }
	});
} else if (originalHour == 22) {
	var granimInstance = new Granim({
	   element: '#granim-canvas',
	   name: 'granim',
	   stateTransitionSpeed: 1000,
	   opacity: [1, 1],
	   states : {
	       "default-state": {
	           gradients: [
	               ['#b2d9db', '#ded9bf'],
	               ['#e6dca8', '#bccdeb']
	           ]
	       }
	   }
	});
} else if (originalHour == 23) {
	var granimInstance = new Granim({
	   element: '#granim-canvas',
	   name: 'granim',
	   stateTransitionSpeed: 1000,
	   opacity: [1, 1],
	   states : {
	       "default-state": {
	           gradients: [
	               ['#0a0a1a', '#180a1a'],
	               ['#1a0a0c', '#38060c']
	           ]
	       }
	   }
	});
} else {
	var granimInstance = new Granim({
   	element: '#granim-canvas',
   	name: 'granim',
   	opacity: [1, 1],
   	states : {
       "default-state": {
           gradients: [
               ['#f0e584', '#ceabed'],
               ['#dea662', '#f2a48d']
           		]
      		}
   		}
	});
}







