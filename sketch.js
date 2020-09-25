const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world, ground1, ground2, mainThing;
var score = 0;

function setup() {
  var canvas = createCanvas(700, 400);
  engine = Engine.create();
  world = engine.world;

  mainThing = Bodies.circle(70, 300, 20, { density: 0.02 });
  World.add(world, mainThing);

  img = loadImage("thing.png");

  sling = new SlingShot(mainThing, { x: 100, y: 100 });

  ground1 = new Ground(300, 300, 350, 15);
  ground2 = new Ground(550, 200, 100, 15);

  thing1 = new Box(220, 100, 40, 40);
  thing2 = new Box(260, 100, 40, 40);
  thing3 = new Box(300, 100, 40, 40);
  thing4 = new Box(340, 100, 40, 40);
  thing5 = new Box(380, 100, 40, 40);
  thing6 = new Box(240, 80, 40, 40);
  thing7 = new Box(280, 80, 40, 40);
  thing8 = new Box(320, 80, 40, 40);
  thing9 = new Box(360, 80, 40, 40);
  thing10 = new Box(260, 60, 40, 40);
  thing11 = new Box(300, 60, 40, 40);
  thing12 = new Box(340, 60, 40, 40);
  thing13 = new Box(280, 40, 40, 40);
  thing14 = new Box(320, 40, 40, 40);
  thing15 = new Box(300, 20, 40, 40);

  thing16 = new Box(530, 40, 40, 40);
  thing17 = new Box(570, 40, 40, 40);
  thing18 = new Box(550, 0, 40, 40);

  const mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = pixelDensity();
  var options = {
    mouse: mouse
  }
  var mcon = MouseConstraint.create(engine, options);
  World.add(world, mcon);

  Engine.run(engine);
}
function draw() {
  background(0);
  Engine.update(engine);

  text("Score: " + score, 630,50);

  sling.display();

  imageMode(CENTER);
  image(img, mainThing.position.x, mainThing.position.y, 45, 45);

  ground1.display();
  ground2.display();

  thing1.display();
  thing2.display();
  thing3.display();
  thing4.display();
  thing5.display();
  thing6.display();
  thing7.display();
  thing8.display();
  thing9.display();
  thing10.display();
  thing11.display();
  thing12.display();
  thing13.display();
  thing14.display();
  thing15.display();
  thing16.display();
  thing17.display();
  thing18.display();

  thing1.score();
  thing2.score();
  thing3.score();
  thing4.score();
  thing5.score();
  thing6.score();
  thing7.score();
  thing8.score();
  thing9.score();
  thing10.score();
  thing11.score();
  thing12.score();
  thing13.score();
  thing14.score();
  thing15.score();
  thing16.score();
  thing17.score();
  thing18.score();

}

function mouseReleased() {
  setTimeout(function () { sling.fly(); }, 100);
}

function keyPressed(){
  if(keyCode === 32){
      sling.attach(mainThing);
      Body.setPosition(mainThing,{x:200,y:50});
  }
}

