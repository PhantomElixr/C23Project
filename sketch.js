var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var body,body2,body3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(0, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(0, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1=createSprite(400, 650, 2000,50);
	box1.scale=0.2
	box1.shapeColor = "red";

	box2=createSprite(200, 550, 50,1000);
	box2.scale=0.2
	box2.shapeColor = "red";

	box3=createSprite(600, 550, 50,1000);
	box3.scale=0.2
	box3.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	body1 = Bodies.rectangle(400, 650, 2000,50,{isStatic: true});
	World.add(world, body1);

	body2 = Bodies.rectangle(200, 550, 50,1000,{isStatic: true});
	World.add(world, body2);

	body3 = Bodies.rectangle(600, 550, 50,1000,{isStatic: true});
	World.add(world, body3);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.y= packageBody.position.y 
  packageSprite.x= helicopterSprite.position.x 

  helicopterSprite.velocityX = 5;
  //box1.display();
  drawSprites();

  if(packageSprite.y > 350){
	  packageSprite.velocityX = 0;
	  helicopterSprite.velocityX = 0;
  }
}

function keyPressed(){
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false)

  }
  helicopterSprite.velocityX = 0;
}
