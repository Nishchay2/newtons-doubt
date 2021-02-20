class chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        
        var option={
            bodyA:bodyA,
           bodyB:bodyB,
            stiffness:0.2,
            length:20
        }
        this.offsetX=offsetX
        this.offsetY=offsetY
        this.chain=constraint.create(option)
        World.add(world,this.chain)
    }
    
display(){
   
    var pointA=this.chain.bodyA.position;
    var pointB=this.chain.bodyB.position
var pointX=pointB.x+this.offsetX
var pointY=pointB.y+this.offsetY
    strokeWeight(4)
   // console.log(pointA.x)
    line (pointA.x,pointA.y,pointX,pointY)
   
    
}
}