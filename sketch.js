var bg ,gameState= 0, playerCount,database;
var form , game ,player;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game =new Game ();
  game.gameState();
  game.start();

 
}

function draw(){
  //background("white");
  
   
  
}


