class Iron{
	constructor(x,y)
	{
	
		var options={
			resititution:0.8,
			friction:3,
			density:30
		}
	
		
		this.body = Bodies.rectangle(x,y,100,20,options);
        this.width=100;
        this.height=20;
		World.add(world, this.body);

	}
	display()
	{
		var stonepos=this.body.position;
		var angles=this.body.angle;		
		push();
		translate(stonepos.x, stonepos.y);
		rotate(angles);
		rectMode(CENTER)
		strokeWeight(7);
		stroke("grey");
		fill("brown");
	
		rect(0,0,this.width,this.height);
		pop()
	}

}