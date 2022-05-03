var iss
var spaceCraft
var hasDocked = false

function preload(){
  back1=loadImage("spacebg.jpg")
  issImg=loadImage("iss.png")
  spaceCraft1Img=loadImage("spacecraft1.png")
  spaceCraft2Img = loadImage("spacecraft2.png")
  spaceCraft3Img = loadImage("spacecraft3.png")
  spaceCraft4Img = loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(2000,1000);
  iss=createSprite(1000,500)
  iss.addImage(issImg)
  iss.scale=1.5
  spaceCraft=createSprite(1500,600)
  spaceCraft.addImage(spaceCraft1Img)
  spaceCraft.scale=0.4
  
}

function draw() {
  background(back1);
  
  if(!hasDocked){
    spaceCraft.x=random(500,500)
  }
    spaceCraft.velocityY=0
     spaceCraft.velocityX=0
   if(keyDown("up")){
     spaceCraft.velocityY=-2
     spaceCraft.velocityX=0
     spaceCraft.addImage(spaceCraft1Img)
  
    }
   if(keyDown("down")){
    spaceCraft.velocityY=2
    spaceCraft.velocityX=0
   spaceCraft.addImage(spaceCraft2Img)
   
  }
  if(keyDown("left")){
    spaceCraft.velocityY=0
    spaceCraft.velocityX=-2
    spaceCraft.addImage(spaceCraft3Img)
  }
  if(keyDown("right")){
    spaceCraft.velocityY=0
    spaceCraft.velocityX=+2
    spaceCraft.addImage(spaceCraft4Img)
  }


  drawSprites();
}