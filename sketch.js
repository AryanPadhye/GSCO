var Car
var wall
var speed;weight

function setup() {
  createCanvas(1600,400);
 Car=createSprite(300, 200, 10, 10);
 wall=createSprite(900, 200, 10, height/2);
 speed=random(55,90)
 weigt=random(400,1500)
 Car.velocityX=speed

 
 if(wall.x-Car.x<(Car.width+wall.width)/2){  
   
   Car.velocityX=0
   
   var deformation=0.5*weight*speed*speed/22500

   if(deformation>180){
     Car.shapeColor=color(255,0,0)
   }
   if(deformation<180 && deformation>100){
     Car.shapeColor=color(230,230,0)
   }
   if(deformation<100){
     Car.shapeColor=color(0,255,0)
   }
 }   
}

function draw() {
  background(255,255,255);  
  drawSprites();
}