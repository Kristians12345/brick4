var brickImage , ballImage , paddleImage
var paddle
function preload() {
  backgroundImage = loadImage("./assets/background.jpg");
  brickImage = loadImage("assets/brick.png")
  ballImage = loadImage("assets/ball.png")
  paddleImage = loadImage("assets/paddle.png")
}

function setup() {
  canvas = createCanvas(800, 600);

ball = createSprite(400,300,20,20)
ball.addImage("ball",ballImage)
ball.scale = 0.2

paddle = createSprite(400,500,20,20)
paddle.addImage("paddle",paddleImage)
paddle.scale = 0.5


}
 function draw(){
  background(backgroundImage)

  paddle.x = mouseX
  /*if(keyDown(RIGHTARROW)){
    paddle.x = paddle.x + 5
  }*/

  if(keyDown ("space")){
    ball.velocityX = 3
    ball.velocityY = 4
  }

  ball.bounceOff (paddle)
  createEdgeSprites()
  ball.bounceOff(leftEdge)
  ball.bounceOff(topEdge)
  ball.bounceOff(rightEdge)

  Brick()
  Brick2()
  Brick3()
  drawSprites()
 }

 function Brick(){
  if(frameCount % 10 == 0){
    brick = createSprite(800,20,30,30)
    brick.addImage("brick",brickImage)
    brick.velocityX = -4
    brick.scale = 0.15
  }
 
}
 function Brick2(){
  if(frameCount % 10 == 0){
    brick = createSprite(800,60,30,30)
    brick.addImage("brick",brickImage)
    brick.velocityX = -4
    brick.scale = 0.15
  }
 }

 function Brick3(){
  if(frameCount % 10 == 0){
    brick = createSprite(800,100,30,30)
    brick.addImage("brick",brickImage)
    brick.velocityX = -4
    brick.scale = 0.15
  }
 }
