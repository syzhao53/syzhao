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

document.getElementById("time").innerHTML = hour + ":" + minutes + " " + timeOfDay;

// songs
let songs = new Map();
songs.set(0, "do you know how much i love you");
songs.set(1, "Aubrey Plaza");

// artists
let artists = new Map();
artists.set(0, "Grady");
artists.set(1, "Nick Ward");

/*if (songs.has(originalHour)) {
	document.getElementById("song").innerHTML = songs.get(originalHour);
} else {
	document.getElementById("song").innerHTML = "Taking a break!";
}

if (artists.has(originalHour)) {
	document.getElementById("artist").innerHTML = "by " + artists.get(originalHour);
}*/

	document.getElementById("song").innerHTML = songs.get(1);
		document.getElementById("artist").innerHTML = "by " + artists.get(1);


let displayLyrics = false; // for instrumental

let frames = new Map();
frames.set(0, "<iframe id=\"frame\" src=\"https://open.spotify.com/embed/track/7CaGcwpmOrOWSSs38oXcj5?utm_source=generator\" width=\"5.85%\" height" + // do you know how much i love you
	"=\"80\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>");
frames.set(1, "<iframe src=\"https://open.spotify.com/embed/track/6edAjSENRwFF2ebfkEFXuK?utm_source=generator\" width=\"5.85%\" height" + 
	"=\"80\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>");



//document.getElementById("frame").innerHTML = frames.get(originalHour);
document.getElementById("frame").innerHTML = frames.get(1);

originalHour = 1;
let gradient = false;

if (originalHour == 1) {
	var granimInstance = new Granim({
	   element: '#granim-canvas',
	   name: 'granim',
	   opacity: [1, 1],
	   stateTransitionSpeed: 500,
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


document.getElementById("lyrics").innerHTML = "Do you know who you are?<br>Or do you just take a guess?<br>Paint a pretty picture<br>Then try your best?" +
"<br>Do you play the part?<br>When the walls come up<br>But the tears don't stop<br>Then it all comes down<br>And you're left there in the dark." + 
"<br><br>Maybe I cried, maybe I might<br>Maybe it's all you make me do<br>I'll stop blaming it on you<br>Maybe it's pride, maybe I lied<br>I thought I was bulletproof<br>Until the day that I met you";

let lyricView = false;
let lyricDiv = document.getElementById("lyrics");
let songInfo = document.getElementById("song-info");


function switchLyricView() {
	if (!lyricView) {
		lyricDiv.remove();
		lyricView = true;
	} else if (lyricView) {
		document.body.appendChild(lyricDiv);
		lyricView = false;
	}

}

switchLyricView();
songInfo.addEventListener("mouseover", switchLyricView);
songInfo.addEventListener("mouseleave", switchLyricView);





