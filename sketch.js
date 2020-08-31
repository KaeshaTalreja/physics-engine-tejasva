//using namespaces
//const World=Matter.World;
//const Engine=Matter.Engine;
//const Bodies=Matter.Bodies;

var engine,world,ground_obj,ball_obj,box1,box2;
var bird,stick1;
var pig1,pig2;


function setup() {
    createCanvas(1200, 800);

    //create engine
    engine=Matter.Engine.create();
    // create the world
    world=engine.world;

    //create object of Ground type
    ground_obj=new Ground(600,790,1200,20);

   // ball_obj=new Ball();
    
   box1=new Box(200,200,50,50);
   box2=new Box(240,100,70,60);
   bird=new Bird(100,100,50,50);
   pig1=new Pig(800,500,50,50);
   pig2=new Pig(600,500,50,50);
   stick1=new Stick(700,700,20,200,PI/2)

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
    bird.display();
    pig1.display();
    pig2.display();
    stick1.display();
    
}

