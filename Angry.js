const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup()
{
    canvas=createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
}

function draw()
{
    background(0);
}