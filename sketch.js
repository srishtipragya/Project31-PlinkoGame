const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var division=[];
var plinko=[];
var particle=[];
var divisionHeight=300;
function setup() {
  createCanvas(480,650);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(240,640,480,20);
  for(var k=0;k<=width;k+=80){
    division.push(new Division(k,height-divisionHeight/2,10,divisionHeight-10));
  }
  for(var i=40;i<=width;i+=50){
      plinko.push(new Plinko(i,75));
    
  }

  for(var j=15;j<=width;j+=50){
    plinko.push(new Plinko(j,150));
  }

  for(var m=40;m<=width;m+=50){
    plinko.push(new Plinko(m,225));
  
}

  for(var n=15;n<=width;n+=50){
      plinko.push(new Plinko(n,300));
  }

}

function draw() {
 
  background(0);  
  Engine.update(engine);
  ground.display();

  for(var k=0;k<division.length;k++){
  division[k].display();
  }
  for(var j=0;j<plinko.length;j++){
    plinko[j].display();
  }

  if(frameCount%90===0){

    particle.push(new Particles(random(width/2-30,width/2+30),-5));
  }
  for(var i=0;i<particle.length;i++){
    particle[i].display();
  }
}