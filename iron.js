class Iron {
    constructor(x,y){
        var options ={
            restitution: 0.2,
            density: 5.0,
            friction: 2
        }
        this.body = Bodies.rectangle(x,y,100,60,options);
        this.width = 100;
        this.height = 60;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("black")
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}