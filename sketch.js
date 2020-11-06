var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor = color(0,0,0);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
background(255,255,255);
  
if(hasCollided(bullet,wall)) {
    
    bullet.velocityX = 0;
    var Damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(Damage > 10) {
      wall.shapeColor=color(255,0,0);
    }
    if(Damage < 10) {
      wall.shapeColor=color(0,255,0);
    }
  
}  
  drawSprites();
}

function hasCollided(object1,object2) {

if(  object1.x - object2.x < object2.width/2 + object1.width/2 
   &&object2.x - object1.x < object2.width/2 + object1.width/2
   &&object1.y - object2.y < object2.height/2 + object1.height/2
   &&object2.y - object1.y < object2.height/2 + object1.height/2
  ) {
    return true;
  }else{
    return false;
  }




}
