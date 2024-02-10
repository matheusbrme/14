
//Declare a variável para PLAY e END
var gamestate = 1
//inicialize o valor para a variável
//Atribua o valor de gameState como PLAY

var bow ,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var blue,green,pink,red,arrow

var score =0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
  blueB= new Group();
  greenB= new Group();
  pinkB= new Group();
 redB= new Group();
 
  arrowGroup= new Group();

  
}

function draw() {
 background(0);
//Adicione a condição para gameState = PLAY

  scene.velocityX = 3
if (gamestate == 1 )
{

 if (scene.x > 0)
    {
      scene.x = scene.width/2;
    }

 bow.y = World.mouseY

 if (keyDown("space")) 
{
  createArrow()
}
  
var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    switch(select_balloon ){
      case 1: redBalloon();
      break;
      case 2:blueBalloon();
      break;
      case 3:pinkBalloon();
      break;
      case 4:greenBalloon();
      break;
      default:break;
    }
  }

if (arrowGroup.isTouching(redB)) {
    redB.destroyEach();

score = score + 1
gamestate = 0
}
if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();

  score = score + 2
  gamestate = 0
}
if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();

  score = score + 3
  gamestate = 0
}
if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();

  score = score + 4
  gamestate = 0
}


}
 //escreva uma condição para o estado END
 if (gamestate == 0){
  scene.velocityX = 0
bow.destroy()
text("score",+ score,30,200)
 }

  
  drawSprites();
//Adicione a condição de texto para exibir a pontuação.
text("score"+ score,200,40)
}


function redBalloon() {
  red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);

}

// Criar flechas para o arco
 function createArrow() {
  arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);

}
