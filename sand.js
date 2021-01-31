class Sand {
    constructor(x,y){
        var options ={
            restitution: 1.3,
            density: 1,
            friction: 5
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        rotate(angle);
        strokeWeight(2);
        stroke("black");
        fill("brown");
        circle(0,0,this.radius);
        pop();
    }
}