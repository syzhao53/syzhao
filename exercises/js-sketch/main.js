let greenBar = document.querySelector(".greenbar");
let yellowRight = document.querySelector(".yellowshaperight");
let yellowLeft = document.querySelector(".yellowshapeleft");
let redShape = document.querySelector(".redshape");
let redCircle = document.querySelector(".redcircle");

let style = document.querySelector("style");

let greens = ["8baf9c", "84b0ab", "91abc9","91c7c9", "a1b594"];
let yellows = ["eab736", "ffd66e", "#f7b059", "f5b318", "ffca8a"];
let reds = ["8c2020", "b84040", "b84060", "cc5641", "6e2826"];

let greenCtr = 0;
let yellowRightCtr = 0;
let yellowLeftCtr = 0;
let redShapeCtr = 0;
let redCircleCtr = 0;

function greenBarColor() {
    console.log("green bar clicked");

    if (greenCtr == greens.length - 1) {
        greenCtr = 0;
    } else {
        greenCtr++;
    }

    style.innerHTML = ".greenbar{fill:#" + greens[greenCtr] + ";}.yellowshapeleft{fill:#" + yellows[yellowLeftCtr] +";}.yellowshaperight{fill:#" + yellows[yellowRightCtr] + ";}.redcircle{fill:#" + reds[redCircleCtr] + ";}.redshape{fill:#" + reds[redShapeCtr] + ";}.cls-4{fill:#fff;}";
}

function yellowRightColor() {
    if (yellowRightCtr == yellows.length - 1) {
        yellowRightCtr = 0;
    } else {
        yellowRightCtr++;
    }

    style.innerHTML = ".greenbar{fill:#" + greens[greenCtr] + ";}.yellowshapeleft{fill:#" + yellows[yellowLeftCtr] +";}.yellowshaperight{fill:#" + yellows[yellowRightCtr] + ";}.redcircle{fill:#" + reds[redCircleCtr] + ";}.redshape{fill:#" + reds[redShapeCtr] + ";}.cls-4{fill:#fff;}";
    console.log("right: " + style.innerHTML);
}

function yellowLeftColor() {
    if (yellowLeftCtr == yellows.length - 1) {
        yellowLeftCtr = 0;
    } else {
        yellowLeftCtr++;
    }

    style.innerHTML = ".greenbar{fill:#" + greens[greenCtr] + ";}.yellowshapeleft{fill:#" + yellows[yellowLeftCtr] +";}.yellowshaperight{fill:#" + yellows[yellowRightCtr] + ";}.redcircle{fill:#" + reds[redCircleCtr] + ";}.redshape{fill:#" + reds[redShapeCtr] + ";}.cls-4{fill:#fff;}";
    console.log("left: " + style.innerHTML);
}

function redShapeColor() {
    if (redShapeCtr == reds.length - 1) {
        redShapeCtr = 0;
    } else {
        redShapeCtr++;
    }

    style.innerHTML = ".greenbar{fill:#" + greens[greenCtr] + ";}.yellowshapeleft{fill:#" + yellows[yellowLeftCtr] +";}.yellowshaperight{fill:#" + yellows[yellowRightCtr] + ";}.redcircle{fill:#" + reds[redCircleCtr] + ";}.redshape{fill:#" + reds[redShapeCtr] + ";}.cls-4{fill:#fff;}";
}

function redCircleColor() {
    if (redCircleCtr == reds.length - 1) {
        redCircleCtr = 0;
    } else {
        redCircleCtr++;
    }

    style.innerHTML = ".greenbar{fill:#" + greens[greenCtr] + ";}.yellowshapeleft{fill:#" + yellows[yellowLeftCtr] +";}.yellowshaperight{fill:#" + yellows[yellowRightCtr] + ";}.redcircle{fill:#" + reds[redCircleCtr] + ";}.redshape{fill:#" + reds[redShapeCtr] + ";}.cls-4{fill:#fff;}";
}

greenBar.addEventListener("click", greenBarColor);
yellowRight.addEventListener("click", yellowRightColor);
yellowLeft.addEventListener("click", yellowLeftColor);
redShape.addEventListener("click", redShapeColor);
redCircle.addEventListener("click", redCircleColor);


