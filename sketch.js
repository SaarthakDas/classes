const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;


var engine, world;
var box1,box2;
var ground;

function setup() {
  engine= Engine.create();
  world= engine.world;

  createCanvas(800,400);


  ground= new Ground(400,370,800,20)
  box1= new Box(400,200,50,50);
  box2= new Box(440,0,50,100);

  
}

function draw() {
  background("black");
  Engine.update(engine)
  
  ground.display();
  box1.display();
  box2.display();
  
}