var fixed,moving;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 80);
  moving = createSprite(200,200,80,50);

  fixed.shapeColor ="red";
  moving.shapeColor ="yellow";
  moving.velocityX= 3
}

function draw() {
  background("lightblue"); 
  
 //moving.x = mouseX;
 // moving.y = mouseY;

  console.log(fixed.x-moving.x);

  //collision algorithm
/*
  if(fixed.x-moving.x <= fixed.width/2 +moving.width/2 &&
    moving.x-fixed.x <= fixed.width/2 +moving.width/2 &&
    fixed.y-moving.y <= fixed.height/2 +moving.height/2 &&
    moving.y-fixed.y <= fixed.height/2 +moving.height/2 
    ){
    fixed.shapeColor ="green";
  moving.shapeColor ="green";
  }
  else
  {
    fixed.shapeColor ="red";
  moving.shapeColor ="yellow";
  }

  */

  //bounceOff algorithm
  
 if(fixed.x-moving.x <= fixed.width/2 +moving.width/2 &&
  moving.x-fixed.x <= fixed.width/2 +moving.width/2 ){
    
    moving.velocityX  *= -1;
    fixed.velocityX *= -1;

  }
  if(fixed.y-moving.y <= fixed.height/2 +moving.height/2 &&
  moving.y-fixed.y <= fixed.height/2 +moving.height/2  ){

    moving.velocityY *= -1;
    fixed.velocityY *= -1;
  
  }


  drawSprites();
}