class Paper extends BaseClass{
    constructor(x,y,radius){
        super(x,y,width,height);
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0  
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
       
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 200,200,  this.width, this.height);
        pop();
      }
}