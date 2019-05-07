class Bird {
  constructor() {
    this.x = width * 0.15;
    this.y = height / 2;
    this.size = 30;
    this.gravity = 1;
    this.velocity = 0;
    this.terminalVelocity = 20.0;
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, this.size);
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    let birdBottom = height - (this.size / 2);
    let birdTop = 0 + (this.size / 2);

    if (this.y > birdBottom) {
      this.y = birdBottom;
      this.velocity = 0;
    } else if (this.y < birdTop) {
      this.y = birdTop;
      this.velocity = 0;
    }
  }

  flap() {
    this.velocity -= sqrt(this.gravity * h) / 1.8;

    let maxUp = 3;
    if (this.velocity > maxUp) {
      this.velocity = maxUp;
    }
  }
}
