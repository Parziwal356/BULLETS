var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(90,180);
  weight = random(152,300);
  
  car = createSprite(50, 200, 80, 30);
  car.velocityX = speed;

  wall =createSprite(1500,200,15,200);
  wall.shapeColor = "white";
}

function draw() {
  background("black");
  
  if(wall.x-car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
   if(deformation>180){
     car.shapeColor = "red";
   }
   if(deformation < 180 && deformation > 100){
     car.shapeColor = "yellow";
   }
   if(deformation<100){
     car.shapeColor = "green";
   }
  }
  drawSprites();
}