var ball;
var database, position;
function setup(){
    createCanvas(500,500);
    database= firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPositionref=database.ref("ball/position");
    ballPositionref.on("value",readPos,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("ball/position").set({
        x : ball.x + x,
        y : ball.y + y
    })

   
}
function showError (){
    console.log("errors");
}
function readPos (data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;

}