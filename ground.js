class Ground{

constructor(x,y){
    var option = {
        isStatic: true
    }
  this.ground = Bodies.rectangle(x,y,200,200,option);
  this.w=800;
  this.h=30;
  World.add(myworld,this.ground);

}

 gg(){
   rectMode(CENTER);  
   rect(this.ground.position.x,this.ground.position.y,this.w,this.h);
 }

}