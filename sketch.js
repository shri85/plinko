const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;


function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(480,800);

  ground = new Ground(240,780,480,20);


  




}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  
  ground.display();
}