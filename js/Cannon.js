class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.CannonIMG = loadImage("./assets/canon.png")
    this.CannonbaseIMG = loadImage("./assets/cannonBase.png")
  }
  
 display() {
  push();
  imageMode(CENTER) ; 
  image(this.CannonIMG,this.x,this.y,this.width,this.height);
  pop();
  image(this.CannonbaseIMG,70,20,200,200);
  noFill();
 }
}

