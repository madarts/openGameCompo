// Funcion de Generar Fondo //
var fondoGen;

// Array con las posiciones de las estrellas //
var estrellasPos = Array();

window.addEvent('domready', function() {
	// FUNCION PARA GENERAR EL FONDO DEL MAPA //
	fondoGen = Function.from(function(){
		//Estrellas
		if(estrellasPos.length == 0){
			for(a=0;a<200;a++){
				estrellasX = rand(0,x);
				estrellasY = rand(0,y);
				tam = rand(1,4);
				
				estrellasPos[estrellasPos.length] = Array(estrellasX,estrellasY,tam);
			}
		}
		
		for(a=0;a<estrellasPos.length;a++){
			estrellasX = estrellasPos[a][0];
			estrellasY = estrellasPos[a][1];
			tam = estrellasPos[a][2];

			ctx.fillStyle = 'rgb(255,255,255)';
			
			ctx.beginPath();
			ctx.arc(estrellasX,estrellasY,tam,0,Math.PI*2,true);
			ctx.fill();
			
		}
	});
	
});