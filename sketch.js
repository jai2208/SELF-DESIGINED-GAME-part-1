var graveYardImg,graveYard;


function preload(){
  graveYardImg = loadImage("background2.png")
  
}

function setup() {
  createCanvas(820, 480);
  
  graveYard=createSprite(300,100)
  graveYard.addImage("graveYard",graveYardImg)
 // graveYard.x = graveYard.width/2
  graveYard.velocityX = -3
}

function draw() {
  background(180);

if(graveYard.x < 140)
{
 graveYard.x = graveYard.width/2
}  
  
  
  drawSprites();
}

