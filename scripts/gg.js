//player localizacao no canvas
var player_x = 150;
var player_y = 400;
var player_speed = 6 ;
var player_speed2 = 3 ;
//fundo (background)
var back = new Image();
var back2 = new Image();
var ceu = new Image();

//barreiras
var x = 805;
var y = Math.floor(Math.random()*100)+400;
var h = 10;
var w = 10;
var color = "#FF0000";	
var speed = -10;
var barreira = new Image();
barreira.src = "source/barreira.png"
//bulianas
var perspectiva = false;

var colidir = true;
var passar = false;
//tempo da "gif"
var start = (new Date()).getTime();
var current;	
var currentFrame = 0.;

var images = new Array();
var numFrames = 3;
for (var i = 0; i < numFrames; i++)
{
	images[i] = new Image();
	images[i].src = "source/boneco" + (i+1) + ".png";
}

//jogando a "gif" na localização do jogador
var image_w = 135;
var image_h = 130;
var image_w2 = 135;
var image_h2 = 130;
var image_x = player_x;
var image_y = player_y;
// defendendo
var defender;
var deletar = false;
var defesa = new Array();

//fundos
var bw = 800;
var bh = 600;
var bx = 0;
var by = 0;
var bs = 10;
var bx2 = 800;
var by2 = 0;
var ceux = 0;
var ceuy = 0;

back.src = "source/background.png";
back2.src = "source/background2.png";
ceu.src = "source/backgroundparado.jpg";

function defender ()
{
	for (var i = 0; i < 4; i++)
	{
	defesa[i] = new Image();
	defesa[i].src = "source/bonecoDF"+ (i+1) +".png";
	}
}


// TECLAS PARA MOVER [JOGADOR] 
	var player_moveLeft = false;
	var player_moveRight = false;
	var player_moveUp = false;
	var player_moveDown = false;
	var player_defende = false;


	