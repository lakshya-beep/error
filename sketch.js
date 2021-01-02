const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, myworld;
var b1;
var b2;
var ggd;
var exper;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    myworld = engine.world;

    b1 = new Box(100,100,50,50);
    b2 = new Box(200,205,10,75);
    ggd = new Ground(400,370);
    exper = new Ball(20,20,40);

    console.log(exper);
}

function draw(){
    background(0);
    Engine.update(engine);

    b1.show();

    b2.show();

    ggd.gg();

    exper.display();

    }