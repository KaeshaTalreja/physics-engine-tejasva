//using namespaces
//const World=Matter.World;
//const Engine=Matter.Engine;
//const Bodies=Matter.Bodies;

var engine,world,ground_obj,ball_obj,box1,box2;

function setup() {
    createCanvas(400, 400);

    //create engine
    engine=Matter.Engine.create();
    // create the world
    world=engine.world;

    //create object of Ground type
    ground_obj=new Ground();

   // ball_obj=new Ball();
    
   box1=new Box(200,200,50,50);
   box2=new Box(240,100,70,60);

}
  
function draw() {
    background(220);
    //update engine
    Matter.Engine.update(engine);

    ground_obj.display();
    //console.log(ground.position);

    //ball_obj.display();

    box1.display();
    box2.display();
    
}

