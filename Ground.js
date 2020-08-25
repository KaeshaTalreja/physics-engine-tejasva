class Ground{
    constructor(){
        var ground_options={
            isStatic:true
        }
    
        //create objects/bodies
        this.ground=Matter.Bodies.rectangle(200,380,400,30,ground_options);
        //body should be added to the world
        Matter.World.add(world,this.ground);
        //console.log(ground.position);
    }
    display(){
        //giving the physical shape to the body on the canvas
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,400,30);
    }
}