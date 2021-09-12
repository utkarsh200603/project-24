class Stone{
	constructor(x,y)
	{
		
		var options={
			resititution:0.8,
			friction:0.9,
			density:12
		}
	
		
		this.body = Bodies.rectangle(x,y,30,100,options);
        this.weight=30;
        this.height=100;
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
			strokeWeight(4);
			stroke("red");
			fill("pink");
        
			rect(0,0,this.width,this.height);
			pop();
	}

}