class Particles{
    constructor(x,y){
        var option={
            restitution:0.5
        }
        this.body=Bodies.circle(x,y,10,option);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        push();
        
        ellipseMode(RADIUS);
        fill(this.color);
        noStroke();
        ellipse(this.body.position.x,this.body.position.y,10,10);
    }
}