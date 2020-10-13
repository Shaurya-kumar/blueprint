const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

// Instances

var engine,world;
var ground,ball;
var box1,box2;

// our own World




function setup() {
  createCanvas(400,400);
  
 engine = Engine.create();
 world = engine.world;

 /*var ground_options = {
  isStatic:true


}
 
ground = Bodies.rectangle(200,380,400,20 ,ground_options);
World.add(world,ground);

var ball_options = {
restitution:1.0
}

ball = Bodies.circle(200,200,20,ball_options);
World.add(world,ball);*/

box1 = new Box(200,100,50,150);
box2 = new Box(230,300,50,50);

ground = new Ground(200,390,400,10);

}


function draw() {
  background(0);  
  
  Engine.update(engine);
  
  box1.display();
  box2.display();

  ground.display();
}