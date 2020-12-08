var rect1,rect2,rect3;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(100,100, 50, 50);
  rect2 = createSprite(300,100,50,50);
  rect3 = createSprite(100,300,50,50);
  rect1.debug = true;
  rect2.debug = true;
  rect3.debug = true;
  rect1.velocityX = 2;
  rect2.velocityX = -2;
  rect3.velocityY = -2;
}

function draw() {
  background(255,255,255);  

  if(isTouching(rect1,rect3)) {
    rect1.shapeColor ='red';
    rect3.shapeColor = 'blue';
  }else {
    rect1.shapeColor = 'green';
    rect3.shapeColor = 'green';
  }

  bounceOff(rect1,rect2);

  drawSprites();
}