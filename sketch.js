const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  backgroundImg = loadImage("assets/background.gif");

}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  tower = new Tower(150, 380, 160, 310);
  ground = new Ground(150, 550, 160, 10);
  
}

function draw() {
  background(189);
  Engine.update(engine);
 image(backgroundImg, 600, 300, width, height);

  
  ground.display();
  tower.display();
  
 
}







