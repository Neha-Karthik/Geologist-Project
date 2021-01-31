class Stone {
    constructor(x,y){
        var options ={
            restitution: 0.2,
            density: 7.0,
            friction: 2
        }
        this.body = Bodies.rectangle(x,y,100,100,options);
        this.width = 100;
        this.height = 100;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("grey");
        rect(0,0,this.width,this.height);
        pop();
    }
}