var canvas,block1,block2,block3,block4,box;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(770,600,200,50);
    block1.shapeColor = "red"; 

    block2 = createSprite(520,600,160,50);
    block2.shapeColor = "green";

    block3 = createSprite(290,600,160,50);
    block3.shapeColor = "pink";

    block4 = createSprite(70,600,160,50);
    block4.shapeColor = "yellow";

    //create box sprite and give velocity
    box = createSprite(100,20,20,20);
    box.shapeColor = "white";
    box.velocityX = 3;
    box.velocityY = 3;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     //CreateedgeSprites();
    edges = createEdgeSprites();
    box.bounceOff(edges);



    //add condition to check if box touching surface and make it box
    if(box.isTouching(block1) && box.bounceOff(block1)){
        box.shapeColor = "red";
    }//else{
        //box.shapeColor = "white";
    //}

    if(block2.isTouching(box) && box.bounceOff(block2)){
        box.shapeColor = "green";
    }//else{
        //box.shapeColor = "white";
    //}

    if(block3.isTouching(box) && box.bounceOff(block3)){
        box.shapeColor = "pink";
    }//else{
       // box.shapeColor = "white";
    //}

    if(block4.isTouching(box) && box.bounceOff(block4)){
        box.shapeColor = "yellow";
    }//else{
       // box.shapeColor = "white";
    //}

    drawSprites();
}
