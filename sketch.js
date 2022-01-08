var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200, 200, 50, 50);
}

function draw() 
{
  if (keyDown("right")){
    background(255, 0, 0);
  }

  if (keyDown("left")){
    background(0, 255, 0);
  }
  
  if (keyDown("up")){
    background(0, 0, 255);
  }

  if (keyDown("down")){
    background(255, 0, 255);
  }
  
  
  drawSprites();
}




