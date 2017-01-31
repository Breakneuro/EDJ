

var Keyboard = function()
{
	this.keydown = function(e)
	{
		switch (e.keyCode)
		{
			case 37: // seta esquerda
				player.moveLeft = true;
				break;

			case 39: // seta direita
				player.moveRight = true;
				break;
		}		
	}
	
	this.keyup = function(e)
	{
		switch (e.keyCode)
		{
			case 37: // seta esquerda
				player.moveLeft = false;
				break;

			case 39: // seta direita
				player.moveRight = false;
				break;
		}	
	}
}

var keyboard = new Keyboard();

document.addEventListener("keydown", keyboard.keydown, true);
document.addEventListener("keyup", keyboard.keyup, true);

















