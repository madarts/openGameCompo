var pasivosGen;

var pasibosPos = Array();

window.addEvent('domready', function() {
	//FUNCION PARA GENERAR LOS PLANETAS PASIBOS
	pasivosGen = Function.from(function(){
		if(pasibosPos.length == 0){
			for(i=0;i<5;i++){
				distancia = 100+(i*50);
				
				posicionX1 = x/2;
				posicionX2 = rand(x/2-distancia,x/2+distancia);
				posicionY1 = y/2;
				posicionY2 = 0;
				
				parte1 = Math.pow(posicionX2,2)-(2*(posicionX2*posicionX1))+Math.pow(posicionX1,2);
				parte2 = -posicionY1*2;
				parte3 = Math.pow(posicionY1,2);
				parte4 = Math.pow(distancia,2);
				
				resultado = parte1  + parte3 - parte4;
				
				raiz = Math.sqrt(Math.pow(parte2,2)-(4*resultado));
				
				posY = Array((-parte2+raiz)/2,(-parte2-raiz)/2);
				if(i%2 == 0) posY = Array(posicionX2, posY[0]);
				else posY = Array(posicionX2, posY[1]);
				
				pasibosPos[pasibosPos.length] = Array(posY[0], posY[1]);
				
				AllPosition[AllPosition.length] = Array(posY[0], posY[1]);
			}
		}
		
		for(i=0;i<pasibosPos.length;i++){	
			distancia = 100+(i*50);
			
			ctx.fillStyle = 'rgb(0,0,0)';
			ctx.beginPath();
			ctx.arc(pasibosPos[i][0],pasibosPos[i][1],12,0,Math.PI*2,true);
			ctx.fill();
			
			
			ctx.beginPath();
			ctx.lineWidth = 2;
			ctx.strokeStyle = 'rgb(255,255,255)';
			ctx.arc(pasibosPos[i][0],pasibosPos[i][1],12,0,Math.PI*2,true);
			ctx.stroke();
			
			txtPosX = 3;
			distanciaNum = ""+ parseInt(distancia/10) +"";
			
			if(distanciaNum.length != 1) txtPosX = 7;
			
			ctx.font = "14px Myriad Pro";
			ctx.fillStyle = 'rgb(175,175,175)';
			ctx.fillText(distanciaNum, pasibosPos[i][0]-txtPosX,pasibosPos[i][1]+4);
		}
		
	});
	
});