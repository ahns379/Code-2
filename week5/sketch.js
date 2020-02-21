

this.focus(); // means you don't have to click on the canvas to use the keyboard

let g;
let a;
let gridSize;
let inset;

function setup() {
  createCanvas(400, 400);
  inset = 30;
  let columns =  10;
  let rows = columns;

  gridSize = (width - 2 * inset) / columns;
  print(gridSize);
  g = new Grid(columns, rows, gridSize, inset);

  a = new Agent(2, 0);
  g.drawAgent(a);
}

function draw() {
//  background(220);
  g.addStuff(a);
  g.draw();
  g.drawAgent(a);
}



function mousePressed() {

  let fillColor = color(255);
  let mX = mouseX - inset;
  let mY = mouseY - inset;
  let column = int(mX / gridSize ) ;
  let row = int(mY / gridSize);
  print(mX + " " + column + " " + mY + " " + row);
  a.changePos(column,row);
  
  // fill(fillColor);
  // drawGrid(column,row,sqSize);
}

function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      a.moveUp();
      break;
    case DOWN_ARROW:
      a.moveDown();
      break;
  }
}