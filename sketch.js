var apple,boy,sword,cartoon_funny_seamiess_wide_fantasy_lamdscape;
var appleImg,boyImg,swordImg,cartoon_funny_seamiess_wide_fantasy_lamdscapeImg;
var treasureCollection=0;
var appleGroup,swordGroup;
var picImg;
var PLAY=1;
var END =0;
var gameState =1;
var score=0;
var end1;

function preload(){
picImg = loadImage("cartoon-funny-seamless-wide-fantasy-landscape.jpg");
boyImg = loadImage("chari.png");
swordImg = loadImage("Sword.png");
endImg = loadImage("gameover.png")
appleImg = loadImage("apple.jpg");

}

function setup() {
  createCanvas(600,300);
// Moving background
path=createSprite(200,150,500,200);
path.addImage("path",picImg);
//path.x=path.width/2;
path.scale=2.2;
path.velocityX= -2;


//creating boy running
boy = createSprite(150,100,20,20);
boy.addImage("SahilRunning",boyImg);
boy.scale=0.1;

apple=createSprite(40,350,10,10);
apple.addImage(appleImg);
apple.scale=0.4;


appleG=new Group();

swordGroup=new Group();

end1=createSprite(400,400);
end1.addImage(endImg);
end1.visibile=false;


}

function draw() {
   if(gameState===PLAY){
      
     
    
      score=score+Math.round(getFrameRate()/60);
     // path.velocityX=-(6+ 3*score/100);

      if(keyDown("space") && boy.x>=159){
        boy.velocityY=-10;
      }

      boy.velocityY =boy.velocityY+ 0.8;

      if(path.x <2){
        path.x =path.width/5;

    
      }
    


    boy.x = World.mouseX;
    //path.velocityX= -4;
    edges= createEdgeSprites();
    boy.collide(edges);
   
   
    
      createApple();
      createSword();


        if (appleG.isTouching(boy)) {
          appleG.destroyEach();
          treasureCollection=treasureCollection+5;
        }
      
      
        if(swordGroup.isTouching(boy)) {
          gameState=END;
        }
      }
        else if(gameState===END){

        
          path.velocityX=0;
          
         boy.addImage("SahilRunning",endImg);
         boy.x=200;
         boy.y=100;
         boy.scale=0.6;
          
          end1.visibile=true;
          boy.visibile=false;

          appleG.destroyEach();
          swordGroup.destroyEach();
          
          appleG.setVelocityXEach(1);
          swordGroup.setVelocityXEach(1);


      }
    
  
    drawSprites();
    textSize(20);
    fill(255);
    text("Treasure: "+ treasureCollection,50,30);
    
  }
  
  
      function createApple() {
        if (World.frameCount % 200 == 0) {
      var apple = createSprite(Math.round(random(50, 350),40, 10, 10));
      apple.addImage(appleImg);
      apple.scale=0.12;
      apple.velocityY = 3;
      apple.lifetime = 150;
      appleG.add(apple);

     
      }
    }

    function createSword(){
      if (World.frameCount % 530 == 0) {
      var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
      sword.addImage(swordImg);
      sword.scale=0.1;
      sword.velocityY = 3;
      sword.lifetime = 150;
      swordGroup.add(sword);
      }
    }

