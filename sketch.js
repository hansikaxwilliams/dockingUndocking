var spacebg;
var issImg;
var hasDocked = false;
var spacecraft, iss;


function preload(){

  spacebg = loadImage("Docking-undocking/spacebg.jpg");
  issImg = loadImage("Docking-undocking/iss.png");
  scImg1 = loadImage("Docking-undocking/spacecraft1.png");
  scImg2 = loadImage("Docking-undocking/spacecraft2.png");
  scImg3 = loadImage("Docking-undocking/spacecraft3.png");
  scImg4 = loadImage("Docking-undocking/spacecraft4.png");

}


function setup() {
  createCanvas(600, 350);

 spacecraft = createSprite(285, 240);
 spacecraft.addImage(scImg1);
 spacecraft.scale = 0.15;
 //spacecraft.visible = false;

 iss = createSprite(330, 130);
 iss.addImage(issImg);
 iss.scale = 0.25;

}

function draw() {
  background(spacebg); 
  
  spacecraft.addImage(scImg1);
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y - 2;
    }

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(scImg4);
      spacecraft.x = spacecraft.x - 1;
    }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(scImg3);
      spacecraft.x = spacecraft.x + 1;
    }

    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scImg2);
    }
  }

  if(spacecraft.y <= (iss.y + 50) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful!", 200, 300);
  }
  drawSprites();
}