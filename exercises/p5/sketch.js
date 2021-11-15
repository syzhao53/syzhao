
//create a variable to store the slider in
let slider;

function setup() {
  //create a variable for canvas so that we can reference it for positioning later
  let canvas = createCanvas(windowWidth, windowHeight);
  //you can specify the position of your element like this. it's best to do most positioning in CSS, but here I'm setting it to the top
  canvas.position(0, 0);
  //you can add a CSS class to something by putting .class after it
  canvas.class("container");
  //set the variable to the createSlider function. createSlider values are: minimum, maximum, starting value.
  slider = createSlider(10, 1000, 0);
  slider.class("slider");
}
function draw() {
  background("Black");
  stroke("none");
  //set the width and height of the ellipse using slider.value
  for (i = 0; i <= slider.value(); i++) {
    fill(slider.value() / i, slider.value() / i*2, slider.value() / i *3, slider.value() / i*3);
    ellipse(windowWidth/2, windowHeight/(i+1), slider.value(), slider.value());

    fill(slider.value() / i*3, slider.value() / i*2, slider.value() / i, slider.value() / i*3);
    ellipse(windowWidth/(i+1), windowHeight/2, slider.value(), slider.value());

    fill(slider.value() / i*3, slider.value() / i*2, slider.value() / i, slider.value() / i*3);
    ellipse(windowWidth/2, windowHeight - i, slider.value(), slider.value());

        fill(slider.value() / i*3, slider.value() / i*2, slider.value() / i, slider.value() / i*3);
    ellipse(windowWidth-i, windowHeight/2, slider.value(), slider.value());
  }

}