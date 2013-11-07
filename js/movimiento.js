var viejaPosUserX = 0;
var viejaPosUserY = 0;

var newPosUserX = 0;
var newPosUserY = 0;
		
window.addEvent('domready', function() {
	recalcUserPos = Function.from(function(){
		if(newPosUserX > 0 || newPosUserY > 0){

			if(newPosUserX != userPos[0]){
				medio1 = newPosUserY-viejaPosUserY;
				medio2 = newPosUserX- viejaPosUserX;
				
				pendiente = medio1 / medio2;
				
				if(viejaPosUserX > newPosUserX)
					nuevaY = pendiente*(userPos[0]-1-newPosUserX)+newPosUserY;
				else
					nuevaY = pendiente*(userPos[0]+1-newPosUserX)+newPosUserY;
					
				if(viejaPosUserX > newPosUserX)
					userPos[0] = userPos[0]-1;
				else
					userPos[0] = userPos[0]+1;
				
				userPos[1] = (nuevaY);
				
			}
			else{
				if(newPosUserY != userPos[1]){
					if(viejaPosUserY > newPosUserY)
						userPos[1] = userPos[1]-1;
					else
						userPos[1] = userPos[1]+1;
				}
				else{
					viejaPosUserX = 0;
					viejaPosUserY = 0;
				}
				
				newPosUserX = 0;
				newPosUserY = 0;
			}
			
		}
	});
	
	
	
	$('canvas').addEvent('click', function(event){
		userX = event.page.x - event.target.getPosition().x;
		userY = event.page.y - event.target.getPosition().y;
		
		if(newPosUserX == 0 && newPosUserY == 0){
			for(i=0;i<AllPosition.length;i++){
				if(AllPosition[i][0]+8 > userX && AllPosition[i][0]-8 < userX && AllPosition[i][1]+8 > userY && AllPosition[i][1]-8 < userY){
					viejaPosUserX = userPos[0];
					viejaPosUserY = userPos[1];
					
					newPosUserX = AllPosition[i][0];
					newPosUserY = AllPosition[i][1];
				}
			}
		}
	});
});