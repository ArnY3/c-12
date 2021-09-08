var garden,rabbit;
var gardenImg,rabbitImg;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png");
  leaveImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);





}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2));

  if (frameCount % 80 == 0) {
    if (select_sprites== 1){
       
      function createApples(); {

        apple = createSprite(random(50,350), 40,10,10);
        apple.addImage(appleImg);
        apple.velocityY = 5;
        apple.lifeTime = 5;
      }
    } else {
       
      function createLeaves(); {

        leave = createSprite(random(50,350), 40,10,10);
        leave.addImage(leaveImg);
        leave.velocityY = 5;
        leave.lifeTime = 5;
      }
    }
  }

  drawSprites();
}

