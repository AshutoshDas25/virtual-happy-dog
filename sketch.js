//Create variables here
var dog,happyDog,database,foodS,foodStock,food;
function preload()
{
  dog4=loadImage("images/dogImg.png");
  dog5=loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(600, 600);
  database=firebase.database();
  Dog1=createSprite(300,350,50,50);
  Dog1.addImage("h2",dog4);
 // Dog2=createSprite(400,450,50,50);
  //Dog2.addImage("g2",dog5);
 var plastic=database.ref("food");
 plastic.on("value",readFood)
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStocks(foodS)
  }
  textSize(30);
  fill("black");
text("food: "+foodS,250,50);
  drawSprites();
  //add styles here

}
function readFood(data){
foodStock=data.val();
foodS=foodStock;

}
function writeStocks(count){
  foodS=foodS+1;
database.ref('/').update({
  food:count
})
}

