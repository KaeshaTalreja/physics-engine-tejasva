class Ball{
    constructor(){
        var ball_options={
            restitution:1.9
        }
    
        //create objects/bodies
        this.ball=Matter.Bodies.circle(200,200,20,ball_options);
        //body should be added to the world
        Matter.World.add(world,this.ball);
        //console.log(ground.position);
    }
    display(){
        //giving the physical shape to the body on the canvas
        ellipseMode(RADIUS);
        ellipse(this.ball.position.x,this.ball.position.y,20,20);
    }
}