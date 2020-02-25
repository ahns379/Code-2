let rectangles = [];

let r;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 100; i++) {
    rectangles.push(new Rectangle());
  }
  r = new Rectangle();
}

function draw() {
  background(255);
  
  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].display();
  }
}