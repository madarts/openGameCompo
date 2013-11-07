function rand(l,u){
	return Math.floor((Math.random() * (u-l+1))+l);
}
function rand1(){
	if(rand(1, 2) == 1) return -0.4;
	else return 0.4;
}



var ctx;
var x ;
var y;

Level = 1;

var AllPosition = Array();

window.addEvent('domready', function() {
	ctx = document.getElementById('canvas').getContext('2d');

	x = document.getElementById('canvas').width;
	y = document.getElementById('canvas').height;
	
	
	
	
	
	
	
	
	
	
	
	
	
	// ReLoad Screen //
	var reloadGraph = Function.from(function(){
		ctx.clearRect (0,0, x,y);//limpiamos pantalla
		
		
	}).periodical(1);	
});