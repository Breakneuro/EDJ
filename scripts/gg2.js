var start = (new Date()).getTime();
	var current;	
	var currentFrame = 0.;
	var marealta1 = new Image();
	var marealta2 = new Image();
	var maremedia1 = new Image();
	var maremedia2 = new Image();
	var marebaixa1 = new Image();
	var marebaixa2 = new Image();
	var mar_speed = -15;
	
	marealta1.src = "source/marealta1.png";
	marealta2.src = "source/marealta2.png";
	maremedia1.src = "source/maremedia1.png";
	maremedia2.src = "source/maremedia2.png";
	marebaixa1.src = "source/marebaixa1.png";
	marebaixa2.src = "source/marebaixa2.png";
	
	var mar1_x = 0;
	var mar1_y = 0;
	var mar2_x = 800;
	var mar2_y = 0;
	
	var balla = new Image()
	balla.src = "source/balla.png";
	balla_h = 20;
	balla_w = 20;
	
	var ceu = new Image();
	ceu.src = "source/ceu.jpg";
	ceu_x = 0;
	ceu_y = 0;
	var nuvem1 = new Image();
	var nuvem2 = new Image();
	nuvem1.src = "source/nuvem1.png";
	nuvem2.src = "source/nuvem2.png";
	var nuvem1_x = 800;
	var nuvem1_y = Math.floor(Math.random()*210);
	var nuvem2_x = 800;
	var nuvem2_y =	Math.floor(Math.random()*210);
	var nuvem_speed = -7;
	var nuvem_speed2 = -10;
	
	var position_obs = [550,400,475];
	
	var player = {};
	player_x = 200;
	player_y = 310;
	player_h = 150;
	player_w = 150;
	player_speed = 10;
	
	var obstaculo = new Image();
	obstaculo.src = "source/Rocha.png";
	var obstaculo2 = new Image();
	obstaculo2.src = "source/destrocos.png";
	var obstaculo3 = new Image();
	obstaculo3.src = "source/tentaculos.png";
	var obstaculo_x = 800;
	var obstaculo_y = position_obs[Math.floor(Math.random()*3)];
	var obstaculo_h = 100;
	var obstaculo_w = 100;
	var obstaculo_speed = 20;
	var chefe = new Image();
	chefe.src = "source/boss.png";
	chefe_x = 400;
	chefe_y = 600;
	chefe_speed = 4;
	chefe_w = 500;
	chefe_h = 490;
	
	var bote = [obstaculo,obstaculo2,obstaculo3];
	var qualbote = bote[Math.floor(Math.random()*3)];
	
	var canMoveDown = true;
	var canMoveUp = true;
	var position = [310,390,460];
	var currPosition = 0;
	var pontos = 0;	
	var win = false;
	var boss = false;
	var tiro = new Image();
	tiro.src = "source/tiro.png";
	tiro_x = 800; 
	tiro_y = Math.floor(Math.random()*200) + 300;
	tiro_h = 50;
	tiro_w = 50;
	tiro_speed = 15;
	var T = 20;
	
		for (var i = 0; i < 7; i++)
		{
			player[i] = new Image();
			player[i].src = "source/player"+ (i+1) + ".png";
		}
	
	var cena = "lanefase";
	
	function tiros()
	{
		tiro_x -= tiro_speed;
		if (tiro_x < 0)
		{tiro_x = 600;tiro_y = position_obs[Math.floor(Math.random()*3)];}
	}
	
	var bala = {};
	var bala_x = (player_x + 85);
	var bala_y = (player_y + 90);
	var trololo = false;
	
	function negobam(){
		
		if(!trololo){
		bala_x = (player_x + 85);
		bala_y = (player_y + 90);
		}
		
		if(enter)trololo = true;
		
		if(trololo){
		bala_x+= 15;
		}
	
		if(bala_x > 800){
			bala_x = player_x;
			bala_y = player_y;
			trololo = false;
		}
		if(bala_x > chefe_x && bala_x < chefe_x + chefe_w 
		&& bala_y > chefe_y && bala_y < chefe_y + chefe_h)
		{
		bala_x = player_x;
		bala_y = player_y;
		trololo = false;
		T--
		console.log("true programador");
		}
		
		if (bala_x > tiro_x && bala_x < tiro_x + tiro_w &&
			bala_y > tiro_y && bala_y < tiro_y + tiro_h)
			{
				trololo = false;
			}
		
		
	}
	