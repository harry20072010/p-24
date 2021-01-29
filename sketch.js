
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone;
var ground;
var rubber;

function setup() {
	createCanvas(1000, 600);
	engine = Engine.create();
	world = engine.world;

	 stone = new Stone(300,320,70,70,PI/5);
     ground = new Ground(500,height,1000,20);
	 hammer = new Hammer(300,600,130);
	 rubber = new Rubber(550,320,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  stone.display();
  ground.display();
  hammer.display();
  rubber.display();
  
  drawSprites();
 
}



