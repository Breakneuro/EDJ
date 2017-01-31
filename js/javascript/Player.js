

var Player = function(x,y,width,height,color,speed)
{	
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;	
	this.speed = speed;
	
	this.shape;
	
	this.moveRight = false;
	this.moveLeft = false;
	
	// função de configuração
	this.setup = function(stage)
	{
		var g = new createjs.Graphics();
		g.beginFill(this.color);
		g.rect(-this.width/2,-this.height/2,this.width,this.height);
		
		this.shape = new createjs.Shape(g); 
		this.shape.x = this.x;
		this.shape.y = this.y;
		
		stage.addChild(this.shape);	
	}
		
	// função de atualização
	this.update = function(canvas)
	{
		if (this.moveRight)
		{
			this.x += this.speed;
		}

		if (this.moveLeft)
		{
			this.x -= this.speed;
		}
		
		if (this.x - this.width / 2 < 0)
		{
			this.x = this.width / 2;
		}		
		else if (this.x + this.width / 2 > canvas.width)		
		{
			this.x = canvas.width - this.width / 2;
		}
	
		// atualiza informação do shape
		this.shape.x = this.x;
	}
}
