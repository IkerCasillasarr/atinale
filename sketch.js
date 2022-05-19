
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSise;
var world;

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

var ball_options={
    isStatic:false,
	restitution:0.3,
    friction:0,
	density:1.2
}
	//crear los cuerpos aquí.
    ball = Bodies.circle(240,100,20,ball_options);
    World.add(world,ball);

    groundObj = new Ground(width/2,670,width,20);
    rightSise = new Ground(1350,600,20,120);
    leftSide = new Ground(1100,600,20,120);

	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background("black");

  ellipse(ball.position.x,ball.position.y,20);

  groundObj.display();
  rightSise.display();
  leftSide.display();

}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
    }
}

