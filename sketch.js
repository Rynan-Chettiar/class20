var fixed, moving; 
var car1, car2;

function setup() 
{ createCanvas(1200,400); 
  fixed=createSprite(300,200,60,100); 
  moving=createSprite(800,200,100,60); 
  fixed.shapeColor="green"; 
  moving.shapeColor="green";
  
  car1= createSprite(100, 300, 50, 50);
  car2= createSprite(1000, 300, 50, 50);
  car1.shapeColor="orange";
  car2.shapeColor="blue";

  car1.velocityX=5;
  car2.velocityX=-5;
}

  
function draw() 
{
   background(0); 
   moving.x=World.mouseX; 
   moving.y=World.mouseY; 
   if(moving.x-fixed.x <= moving.width/2 + fixed.width/2 && 
      fixed.x- moving.x <= moving.width/2 + fixed.width/2 &&
      moving.y-fixed.y <= moving.height/2 + fixed.height/2 &&
      fixed.y- moving.y <= moving.height/2 + fixed.height/2 ) 
      { 
        fixed.shapeColor="red"; 
        moving.shapeColor="red"; 
      } 
      else 
      { 
      fixed.shapeColor="green"; 
      moving.shapeColor="green"; 
      } 
      
      if(moving.x-fixed.x <= moving.width/2 + fixed.width/2 && 
        fixed.x- moving.x <= moving.width/2 + fixed.width/2 )
       {
         car1.velocityX= car1.velocityX*-1
         car2.velocityX= car2.velocityX*-1

        }
      



      
      drawSprites(); 
}