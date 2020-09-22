const Engine =Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//namespacing
var engine,world,box, ground;
function setup() {
  createCanvas(400,400)
  engine = Engine.create();
  world=engine.world;
  box =Bodies.rectangle(200,200,50,50);
  World.add(world,box);
  var options= {
    isStatic:true
  }
  ground =Bodies.rectangle(200,390,400,10,options);
  World.add(world,ground);
}
function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(box.position.x,box.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,10);
}