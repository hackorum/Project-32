class Box {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.2
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.visibility = 255;
    this.img = loadImage("square.png");
  }
  display() {

    if (this.body.speed < 14) {
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.img, pos.x, pos.y, this.width, this.height);
    }
    else {
      var pos = this.body.position;
      World.remove(world, this.body);
      push();
      this.visibility -= 10;
      tint(255, this.visibility);
      imageMode(CENTER);
      image(this.img, pos.x, pos.y, this.width, this.height);
      pop();
    }
  }

  score(){
    if(this.visibility<0 && this.visibility> -15){
      score++;
    }
  }

};
