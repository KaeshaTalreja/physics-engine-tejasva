class Ground{
    constructor(x,y,width,height){
        var ground_options={
            isStatic:true
        }
    
        //create objects/bodies
        this.ground=Matter.Bodies.rectangle(x,y,width,height,ground_options);
        this.width=width;
        this.height=height;
        //body should be added to the world
        Matter.World.add(world,this.ground);
        //console.log(ground.position);
    }
    display(){
        //giving the physical shape to the body on the canvas
        stroke("brown");
        fill("brown");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
    }
}