let theta = 0;
let phi = 0;
const delta = 20;
const period = 2;
const numDots = 8;

function setup() {
  createCanvas(windowWidth, windowHeight);

  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(0, 0, 20);

  push();
  translate(width / 2, height / 2);
  rotate(phi);
  noStroke();
  for (let i = numDots; i >= 0; i--) {
    let a = theta + TWO_PI / numDots * i;
    let b = a + sin(a);
    fill(360 / numDots * i, 100, 100);
    ellipse(cos(b) * 50, sin(b) * 50, 20, 20);
  }
  pop();

  theta = theta < TWO_PI ? theta + TWO_PI / frameRate() / period : 0;
  phi = phi < TWO_PI ? phi + TWO_PI / frameRate() / 5 : 0;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}