let w, h;
let bird;
let pipe;

function setup() {
  w = 720;
  h = 1080;
  createCanvas(w, h);

  bird = new Bird();
  pipe = new Pipe();
}

function draw() {
  background(30);
  bird.show();
  bird.update();

  pipe.show();
  pipe.update();
}

function keyPressed() {
  if (key == ' ') {
    bird.flap();
    console.log("SPACE pressed");
  }
}
