const Bodies = Matter.Bodies;
const Engine = Matter.World;
const World = Matter.World;

var drop;

function preload()
{
  
}

function setup()
{
 createCanvas(700, 100);

 engine = Engine.create();
 world = engine.world;

 //drop = new Drop();
 bat = new Bat();     
}

function draw()
{
 background(0);  
 Engine.update(engine);
 
 //drop.display();
 bat.display();
}   

