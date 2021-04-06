
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperobject;
var world;


	


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	paperobject=new Paper(500,650,70);
	groundObject=new ground(width/2,700,width,20);
	dustbinObj=new dustbin(1200,650);


	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paperobject.display();
  groundObject.display();
  dustbinObj.display();
 

}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:100,y:-145});
}
}