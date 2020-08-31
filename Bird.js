 class Bird{
 	constructor(x,y,width,height){
        var box_options={
            restitution:0.8
        }
    
        //create objects/bodies
        this.box=Matter.Bodies.rectangle(x,y,width,height,box_options);
        this.width=width;
        this.height=height;
        //body should be added to the world
        Matter.World.add(world,this.box);
        //console.log(ground.position);
    }
    display(){
        //giving the physical shape to the body on the canvas
        console.log(this.box.angle);
        var angle=this.box.angle;

        this.box.position.x=mouseX;
        this.box.position.y=mouseY;
        
        push();
        translate(this.box.position.x,this.box.position.y)
        rotate(angle);
        stroke("brown");
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
 }