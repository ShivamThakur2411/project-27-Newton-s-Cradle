const Constraint = Matter.Constraint;

var roofObject;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var chain1,chain2,chain3,chain4,chain5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roofObject = new Roof (400,130,600,20);

	bobObject1 = new Bob(200,530,50);
	bobObject2 = new Bob(300,530,50);
	bobObject3 = new Bob(400,530,50);
	bobObject4 = new Bob(500,530,50);
	bobObject5 = new Bob(600,530,50);
	
	chain1 = new Rope(bobObject1.body,roofObject.body, -200, 0);
	chain2 = new Rope(bobObject2.body,roofObject.body, -100, 0);
	chain3 = new Rope(bobObject3.body,roofObject.body, 0, 0);
	chain4 = new Rope(bobObject4.body,roofObject.body, 100 , 0);
	chain5 = new Rope(bobObject5.body,roofObject.body, 200, 0);

	Engine.run(engine);
}

function draw() {

  rectMode(CENTER);
  background(225);
  
  roofObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body , bobObject1.position,{x:-0.5 , y:-0.5});
	}
}