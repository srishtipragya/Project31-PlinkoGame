class Division{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        push();
        rectMode(CENTER);
        fill(255);
        noStroke();
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}