var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 30);
  fixedRect1 = createSprite(200,100,50,80);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  fixedRect1.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y= World.mouseY;
if(isTouching(movingRect,fixedRect)){
movingRect.shapeColor = "blue";
fixedRect.shapeColor = "blue";
}
else if(isTouching(movingRect,fixedRect1)){
  movingRect.shapeColor = "red";
  fixedRect1.shapeColor = "red";
}
  drawSprites();
}
function isTouching(movingRect,fixedRect){
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2)
    
    {return true;
  
  }
  else{ return false;
  
  }
}