class Rectangle {
  constructor() {
    this.xPosition = random(width);
    this.yPosition = random(height);
    this.width = 50;
    this.height = 50;
    this.color = color(random(255), random(255), random(255), random(100,255));
  }

  
  display() {
    noStroke();
    fill(this.color); 
    
    rect(this.xPosition, this.yPosition, this.width, this.height);
  }
}