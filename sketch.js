var bg;
var form ,game;
var arr;
var arrow;
var targetimg,target;
var bow,bowImage
var block1,block2,block3,block4,block;
var score;
function preload(){
  arr=loadImage("images/arrow0.png");
  bg=loadImage("images/bg2.jpg");
  targetimg=loadImage("images/target.png");
  bowImage=loadImage("images/bow0.png");
}
function setup() {
  createCanvas(windowWidth-50,windowHeight-30);
  game=new Game()
  game.start();
}

function draw() {
    //block1.shapeColor="red";
  drawSprites();
 
}
function keyPressed() {
if(keyCode===32)
{

  game.createArrow();
}

}