
		
window.addEvent('domready', function() {
	// Level Load Datas //
	var loadLevel = Function.from(function(){
		ctx.clearRect (0,0, x,y);//limpiamos pantalla
		
		// Estrellas //
		fondoGen();
		
		// Planetas Pasibos //
		pasivosGen();
		
		// Planeta Tierra //
		userGen();
		
		// Recalcula posicion User //
		recalcUserPos();
		
	}).periodical(1);	
			
});
