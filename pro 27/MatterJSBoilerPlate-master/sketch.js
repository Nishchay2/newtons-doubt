
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint=Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
bob1=new bob(400,350)
roof1=new roof(400,200,600,20)
console.log(bob1)
console.log(roof1)
chain1=new chain(bob1,roof1,0,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
bob1.display()
roof1.display()
chain1.display()
  drawSprites();
 
}



