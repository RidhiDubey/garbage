
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1100,650);
	paper=new Paper(600,600,50);
	Engine.run(engine);
  
}


function draw() {
  imageMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paper.display();

}

