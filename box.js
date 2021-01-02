class Box{

constructor(x,y,w,h){
 var o={
   'friction':0.3,
   'density':1.0,
   'restitution':1.0
 }

  this.body = Bodies.rectangle(x,y,w,h,o);
  World.add(myworld,this.body);
  this.w = w;
  this.h = h;
}

show(){



  rectMode(CENTER);
  rect(this.body.position.x,this.body.position.y,this.w,this.h);
}

}