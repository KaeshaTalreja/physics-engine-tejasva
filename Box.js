class Box{
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
        //console.log(this.box.angle);
        //var angle=this.box.angle;
        rectMode(CENTER);
        rect(this.box.position.x,this.box.position.y,this.width,this.height);
    }
}