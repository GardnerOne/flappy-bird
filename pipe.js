class Pipe {

  constructor() {
    this.gap = 50;
    this.width = 50;
    this.height = h / 2;
    this.x = width;
    this.y = 0;
    this.vel = 8;
    this.gap = 100;

    let padding = 20;
    this.min = -this.height + this.gap + padding;
    this.max = this.height - this.gap - padding;
    this.offset = random(this.min, this.max);
  }

  show() {
    noStroke();
    fill(150);

    let x1 = this.x;
    let x2 = this.x;
    let y1 = this.y;
    let y2 = h - this.height + this.gap - this.offset;
    let w = this.width;
    let h1 = this.height - this.gap - this.offset;
    let h2 = this.height - this.gap + this.offset;

    rect(x1, y1, w, h1);
    rect(x2, y2, w, h2);
  }

  update() {
    this.x -= this.vel;

    if (this.x + this.width < 0) {
      this.x = width;
      this.offset = random(this.min, this.max);
    }
  }
}
