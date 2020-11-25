//Create variables here
var dog,happydDog,database,foodStock,foodS;




function preload(){
  //load images here
  dogimg = loadImage("dogImg.png");
  dogimg2 = loadImage("dogImg1.png");
}

function setup() {
  var canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogimg);
  dog.scale = 0.2;
 
}


function draw() {  
background(46, 139, 87);

  drawSprites();
  //add styles here
  fill("red");
  textSize(20);
  stroke(5);
  text("Press Up Arrow Key To Feed Kong the savage dog some milk",100,100);
  
  if (keyWentDown(UP_ARROW)){
  writeStock(foodS)
   dog.addImage(dogimg2)
  }
  text("food"+foodS,100,200)
  

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x = 0
  }
  else{
    x = x-1
  }
database.ref('/').update({
  food:x
})
}