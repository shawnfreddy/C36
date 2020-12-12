
var canvas,database;
var game,player,form;
var gameState,playerCount;


function setup(){
    canvas = createCanvas();

    database = firebase.database();
    console.log(database)

    gameState = 0;
    playerCount = 0;

    game = new Game();
    game.getState();
    game.signupForm();

}

function draw(){
  background("black")
}