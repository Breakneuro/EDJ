

var Ball = function(x,y,radius,color,speed_x,speed_y)
{	
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.color = color;	
	this.speed_x = speed_x;
	this.speed_y = speed_y;
	
	this.shape;
	
	// função de configuração
	this.setup = function(stage)
	{
		var g = new createjs.Graphics();
		g.beginFill(this.color);
		g.drawCircle(0, 0, this.radius);
		
		this.shape = new createjs.Shape(g); 
		this.shape.x = this.x;
		this.shape.y = this.y;
		
		stage.addChild(this.shape);	
	}
		
	// função de atualização
	this.update = function(canvas)
	{
		this.x += this.speed_x;
		this.y += this.speed_y;
		
		if (this.x - this.radius < 0 || this.x + this.radius > canvas.width)
		{
			this.speed_x *= -1;
		}
			
		if (this.y - this.radius < 0 || this.y + this.radius > canvas.height)
		{
			this.speed_y *= -1;
		}		
		
		// atualiza informação do shape
		this.shape.x = this.x;
		this.shape.y = this.y;
	}
}
