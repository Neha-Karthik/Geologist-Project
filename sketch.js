
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer = new Hammer(200,200);
	plane = new Plane(500,590,1000,10);

	stone = new Stone(400,585);
	rubber = new Rubber(700,587);
	iron = new Iron(600,585);

	sand1 = new Sand(550,587);
	sand2 = new Sand(540,587);
	sand3 = new Sand(530,587);
	sand4 = new Sand(500,587);
	sand5 = new Sand(300,587);
	sand6 = new Sand(350,587);
	sand7 = new Sand(420,587);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("lightgreen");

  hammer.display();
  plane.display();

  stone.display();
  rubber.display();
  iron.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  
  drawSprites();
}



