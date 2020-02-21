class Grid {
  constructor(columns, rows, size, inset) {
    this.cols = columns;
    this.rows = rows;
    this.size = size;
    this.inset = inset;
    this.gridColor = 255;
    this.contents = [];
  }

  draw() {
    for (let row = 0; row < this.rows; row++)
      for (let col = 0; col < this.cols; col++) {
        let gridColor = color(random(255), random(255), random(255));
        this.drawSquare(col, row, gridColor);
      }
  }

  drawSquare(c, r, color) {
    fill(color);
    rect(this.inset + c * this.size, this.inset + r * this.size, this.size, this.size);
  }

  addStuff(thing) {
    this.contents.push(thing);
  }

  stuffAt(x, y) {
    /*
    pass in the coordinates of the agent and
    search through the contents list to see 
    if there is something added to the grid with the same coordinates. 
    return true or false.
    */
  }


  drawAgent(agent) {
    // Change this print to a text() and display the agent position at the top of the canvas
    // print(agent.col + " " + agent.row);
    this.drawSquare(agent.col, agent.row, color(255, 0, 0));
  }

}