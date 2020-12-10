const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImage, treeImage, ground, stone, constraint;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;

function preload() {
  boyImage = loadImage("boy.png");
  treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,375,800,50);
	stone = new Stone(100,250,50,50);
	mango1 = new Mango(600, 35, 35, 40);
	mango2 = new Mango(650, 20, 35, 40);
	mango3 = new Mango(550, 105, 30, 40);
	mango4 = new Mango(595, 105, 50, 50);
	mango5 = new Mango(640, 80, 40, 50);
	mango6 = new Mango(640, 140, 50, 50);
	mango7 = new Mango(690, 70, 40, 50);
	mango8 = new Mango(690, 120, 40, 50);
	mango9 = new Mango(730, 110, 40, 50);
	mango10 = new Mango(570, 150, 40, 50);
	rope = new Rope(stone.body, {x: 100, y: 250});

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("lightblue");

  rope.display();
  noStroke();
  ground.display();
  image(treeImage, 500, -5, 250, 375);
  image(boyImage, 80, 215, 100, 200);
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  collision(stone, ground);
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);

  textFont("Georgia");
  fill("white");
  textSize(10);
  text("When the stone hits the ground, the stone will automatically reset into the boy's hand.", 200, 370);
  text("You can also press the space bar to reset the stone's position back into the boy's hand.", 200, 380)
  text("Press the right arrow key to get reset all the mangos! Good luck!", 200, 390);
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x: mouseX ,y: mouseY});
}

function mouseReleased() {
    rope.fly();
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x: 100, y: 250});
		rope.attach(stone.body);
  }
  if (keyCode === RIGHT_ARROW) {
    Matter.Body.setPosition(mango1.body, {x:600, y:35});
    Matter.Body.setStatic(mango1.body, true);
    Matter.Body.setPosition(mango2.body, {x:650, y:20});
    Matter.Body.setStatic(mango2.body, true);
    Matter.Body.setPosition(mango3.body, {x:550, y:105});
    Matter.Body.setStatic(mango3.body, true);
    Matter.Body.setPosition(mango4.body, {x:595, y:105});
    Matter.Body.setStatic(mango4.body, true);
    Matter.Body.setPosition(mango5.body, {x:640, y:80});
    Matter.Body.setStatic(mango5.body, true);
    Matter.Body.setPosition(mango6.body, {x:640, y:140});
    Matter.Body.setStatic(mango6.body, true);
    Matter.Body.setPosition(mango7.body, {x:690, y:70});
    Matter.Body.setStatic(mango7.body, true);
    Matter.Body.setPosition(mango8.body, {x:690, y:120});
    Matter.Body.setStatic(mango8.body, true);
    Matter.Body.setPosition(mango9.body, {x:730, y:110});
    Matter.Body.setStatic(mango9.body, true);
    Matter.Body.setPosition(mango10.body, {x:570, y: 150});
    Matter.Body.setStatic(mango10.body, true);
  }
}

function detectCollision(stone, mango) {
  mangoPos = mango.body.position;
  stonePos = stone.body.position;

  if (stonePos.x - mangoPos.x < mango.width/2 + stone.width/2 &&
      mangoPos.x - stonePos.x < mango.width/2 + stone.width/2 &&
      stonePos.y - mangoPos.y < mango.height/2 + stone.height/2 &&
      mangoPos.y - stonePos.y < mango.height/2 + stone.height/2){
      
          Matter.Body.setStatic(mango.body,false);
  }
}

function collision(stone, ground) {
  groundPos = ground.body.position;
  stonePos = stone.body.position;

  if (stonePos.x - groundPos.x < ground.width/2 + stone.width/2 &&
      groundPos.x - stonePos.x < ground.width/2 + stone.width/2 &&
      stonePos.y - groundPos.y < ground.height/2 + stone.height/2 &&
      groundPos.y - stonePos.y < ground.height/2 + stone.height/2){
      
          Matter.Body.setPosition(stone.body,{x: 100, y: 250});
          rope.attach(stone.body);
  }
}