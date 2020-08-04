class Bob {
	constructor(x,y,radius){
		var options = {
			isStatic : false,
			'restitution':1.2,
            'friction':2.0
		}
		
	this.body = Bodies.circle(x,y,radius,options);
	this.radius = radius;

	 World.add(world, this.body);
	}

	display(){
		fill("red")
		 ellipseMode(RADIUS);
		ellipse(this.body.position.x , this.body.position.y , this.radius , this.radius)
	}
}