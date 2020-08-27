
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     paper = new Paper(90,600,30);
     ground = new Ground(300,650,1500,10);
     
     box1 = new DustBin(400,300,10,50);
     box = new DustBin(500,300,100,10);

	Engine.run(engine);
  
}


function draw()
 {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  box.display();
  box1.display();
  
  drawSprites();
 
}

function keyPressed()
{
  if (keyDown === UP_ARROW)
  {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-45});
  }
}


