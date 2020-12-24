class Plinko{
    constructor(x,y){
        var option={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,10,option);
        World.add(world,this.body);
    }
    display(){
        push();
        ellipseMode(RADIUS);
        fill(255);
        ellipse(this.body.position.x,this.body.position.y,10,10);
        pop();
    }
}