class bob
{
	constructor(x,y){

        var option={
isStatic:true,
restitution:0.3,
friction:0.5,
density:1.2
        }
        this.body=Bodies.circle(x,y,50,option)
        World.add(world,this.body)
        
    }
    display(){
            var pos=this.body.position
            var angle=this.body.angle
            push()
            translate(pos.x,pos.y)
            rotate (angle)
            fill("white")
            ellipseMode(CENTER)
            ellipse (0,0,50,50)
            pop ()
    }
}