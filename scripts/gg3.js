
	var fundo = new Image();
	var fundo2 = new Image();
	var fundo3 = new Image();
	var fundo4 = new Image();
	var fundo_chefe = new Image();
	var mato = new Image();
	var mato2 = new Image();
	var animacao_1 = new Image();
	var animacao_2 = new Image();
	var animacao_3 = new Image();
	var portao = new Image;
	var mato_tr = new Image();
	mato_tr.src = "source/grama_transicao.png";
	animacao_1.src = "source/finish.png";
	animacao_2.src = "source/finish_ppq.png";
	animacao_3.src = "source/finish3.png";
	portao.src = "source/portao.png";
	fundo.src = "source/floresta1.jpg";
	fundo2.src = "source/floresta2.jpg";
	fundo3.src = "source/muro1.png";
	fundo4.src = "source/muro2.png"
	fundo_chefe.src = "source/fundo_do_chefe.png";
	mato.src = "source/grama.png";
	mato2.src = "source/grama2.png";
	animacoes_x = 0;
	animacoes_y = 0;
	portao_y = 0;
	
	
	var flecha_apaga = false;

	
	f_chefe_x = 0;
	f_chefe_y = 0;
	fundo_x = 0;
	fundo_y = 0;
	fundo_x2 = 800;
	fundo_y2 = 0;
	fundo_speed = 16;
	
	
	var transicao = new Image();
	transicao.src = "source/transicao.png";
	transicao_x = 0;
	transicao_y = 0;
	
	var torre = new Image()
	torre.src = "source/Torre.png"
	torre_x = Math.floor(Math.random()*800)+800;
	torre_y = 275;
	torre_h = 175;
	torre_w = 125;
	torre_speed = fundo_speed;
	
	var flecha = new Image()
	flecha.src = "source/flecha.png";
	var flecha_x = torre_x;
	var flecha_y = torre_y;
	var flecha_x = torre_x;
	var flecha_y = torre_y;
	var flecha_w = 65;
	var flecha_h = 65;
	
	var flecha_speed = 10;
	var flecha_speed2 = 20;
	
	var lanca_speed2 = 30;
	
	function flechas()
	{
		flecha_x -= flecha_speed2;
		flecha_y += flecha_speed;
		
		if(flecha_y > 800)
		{
		flecha_y = torre_y;
		flecha_x = torre_x;
		}
		
		if (flecha_x > player_x && flecha_x < player_x + 54 &&
		flecha_y > player_y && flecha_y < player_y + 60)
		{
		if(player_defende)flecha_x += flecha_speed2;
		if(!player_defende)
		{
		player_x = 0 ;
		player_y = 352;
		vida--;
		
		}
		
		}
	
	}
	
	
	function torres ()
	{
		torre_x -= torre_speed;
		if(torre_x + torre_w < 0)torre_x = Math.floor(Math.random()*800)+800;
		flechas();
	
	}
	
	
	var barreira1 = new Image();
	barreira1.src = "source/barreira1.png"; 
	var barreira_x = 950;
	var barreira_y = Math.floor(Math.random()*80) + 400;
	var barreira_h = 100;
	var barreira_w = 100;
	var barreira_speed = 7;
	
	function colisoesdabarreira ()
	{
		if(player_x > barreira_x && player_x < barreira_x + barreira_w 
			&& player_y + image_h > barreira_y + (barreira_h - 33) && player_y + image_h < barreira_y + barreira_h)
			{
				player_y = 354;
				player_x = 0;
				vida--
				
			}
	}
	function barreiras ()
	{
	barreira_x -= fundo_speed;
	if(barreira_x < -100)
	{
	barreira_x = 950;
	barreira_y = Math.floor(Math.random()*80) + 400;
	}
	colisoesdabarreira();
	}
	var contador = 0;
	var eita = 0;
	var images = new Array();
	var ataque = new Array();
	var numFrames = 3;
	var start = (new Date()).getTime();
	
	function deltaTime()
	{
		current = (new Date()).getTime();
		elapsed = current - start;
		start = current;
		var delta = elapsed / 1000.;			
		return delta;
	}	
	
	var player_x = 150;
	var player_y = 400;

	var currentFrame = 0.;
	//--------------------//
	var parte = "parte1";
	//-------------------//
	
	portao_sobe = false;
	
	var boss_atk = new Array
	var boss_3x = 1350;
	var boss_3y = 400;
	var boss_3h = 130;
	var boss_3w = 135;
	var boss_speed = 5;
	var vida_boss = 100;
	var speed_moviment = 3;
	var sultao = new Array();
	var buliana = false;
	var lanca = new Image();
	lanca.src = "source/lanca.png";
	lanca_x = boss_3x;
	lanca_y = boss_3y;
	lanca_h = 7;
	lanca_w = 70;
	lanca_speed = 10;
	
	for (var i = 0; i < numFrames; i++)
	{
		images[i] = new Image();
		images[i].src = "source/boneco" + (i+1) + ".png";		
		ataque[i] = new Image();
		ataque[i].src = "source/ataque" + (i+1) + ".png";
		sultao[i] = new Image();
		sultao[i].src = "source/batata" + (i+1) + ".png";	
	}
	/*
	for (var i = 0 ; i < 2 ; i++)
	{
		boss_atk[i] = new Image();
		boss_atk[i].src = ""
	
	}
	*/
	function nada()
	{
		
		
		fundo_speed = 0 ;
		buliana = true;
		
	}
	function lancamentos ()
	{
		lanca_x -= lanca_speed;
		
		if(lanca_x < 0)
		{
			lanca_x = boss_3x;
			lanca_y = boss_3y;
			
			omygod = false;
		}
		if(lanca_y > 600)
		{
			omygod = false;
		
		}
	
	}
	omygod =false;
	function tudim ()
	{
		eita++	
		if (eita >=0  && eita <= 25)
		{
		boss_3x -= speed_moviment;
		boss_3y -= speed_moviment;
		}
		if (eita >= 25 && eita <= 50 )
		{
		boss_3x -= speed_moviment;
		boss_3y += speed_moviment;
		}
		if (eita >= 50 && eita <= 75 )
		{
		boss_3x += speed_moviment;
		boss_3y += speed_moviment;
		}
		if (eita >= 75 && eita <= 100)
		{
		boss_3x += speed_moviment;
		boss_3y -= speed_moviment;
		}
		if (boss_3y >= 500)boss_3y = 500;
		if (boss_3x >= 590)boss_3x = 590;
		
		if (eita > 100)eita = 0;
		
		
		lancamentos();
		
		if (lanca_x > player_x && lanca_x < player_x + player_w 
		&& lanca_y > player_y && lanca_y < player_y + 60)
			{
				if(!player_defende)
				{
				vida--;
				player_x = 0;
				player_y = 354;
				}
				if(player_defende)
				{
				omygod = true;
				}
				
			
			}
		
		if(omygod)
		{
			lanca_y += 15;
		
		}
		
		
		
		if (vida_boss < 0)
		{
		parte = "animacao";
		//musica_f3.pause();
		}
	}
		var hue = 0;
		var batata_w = 110;
		
	function casosdoplayer()
	{
		if(!atk)
		{
		if(player_defende)context.drawImage(defesa[Math.floor(currentFrame)%4], player_x, player_y, image_h, image_w);			
		if(!player_defende)context.drawImage(images[Math.floor(currentFrame) % numFrames], player_x, player_y, image_h, image_w);
		}
		if(atk)context.drawImage(ataque[Math.floor(currentFrame) % numFrames], player_x, player_y,150,155);
	}
	
	
	function ppqtiva ()
	{
		if (perspectiva)
			{		
				context.drawImage(barreira1,barreira_x,barreira_y,barreira_h,barreira_w);
				casosdoplayer();
			}
		if (!perspectiva)
			{		
				casosdoplayer();
				context.drawImage(barreira1,barreira_x,barreira_y,barreira_h,barreira_w);
			}
	}