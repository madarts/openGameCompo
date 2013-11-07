// Funcion de Generar Planeta Tierra //
var userGen;

// Array con las posicion de la Tierra //
var userPos = Array();
var userPos1 = Array();

window.addEvent('domready', function() {
	userPos = Array(x/2, y/2);
	userPos1 = Array(x/2, y/2);
	
	// FUNCION PARA GENERAR EL PLANETA TIERRA //
	userGen = Function.from(function(){
		var img=new Image();
		img.src='images/tierra.png';
		ctx.drawImage(img,userPos1[0]-50, userPos1[1]-50);
		
		ctx.fillStyle = 'rgb(50,90,174)';
				
		ctx.beginPath();
		ctx.arc(userPos[0],userPos[1],8,0,Math.PI*2,true);
		ctx.fill();
		ctx.beginPath();
		ctx.lineWidth = 2;
		ctx.strokeStyle = 'rgb(255,255,255)';
		ctx.arc(userPos[0],userPos[1],7,0,Math.PI*2,true);
		ctx.stroke();
	});
	
	AllPosition[AllPosition.length] = Array(userPos1[0],userPos1[1]);
			
});