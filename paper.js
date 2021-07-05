class paper
{
    constructor(x, y, r){
var options = {
friction : 0.1,
density : 2,
restitution : 0.1,
isStatic : false
}
this.x = x
 this.y = y 
 this.r = r
 this.body = Bodies.circle(this.x, this.y, this.r/2, options)
 this.image = loadImage("paper.png")

 
 World.add(world, this.body)  
}
display(){
    var pos = this.body.position
    push();
    translate(pos.x, pos.y);
rectMode(CENTER);
imageMode(CENTER)
image(this.image, 0, 0, this.r, this.r)
//ellipse(0, 0, this.r, this.r)
    pop();
}
}