

var counter = 0;
var index;
var cantusArray = [];

function bang() {
	
	fill();
	outlet(0,cantusArray[counter]);
	counter++;
	//post(cantusArray.length);
	
		
}


function fill()
{
	
	index = rand(7);
	
	switch(index)
	{
		case 0: //I
			cantusArray.push(0);
			index = rand(7);
		break;
		
		case 1: //ii
			cantusArray.push(1);
			var ii = rand(3);
			switch (ii)
			{
				case 0:
					cantusArray.push(2); //iii
					index = 2;
				break;
				
				case 1:
					cantusArray.push(3); //IV
					index = 3;
				break;
				
				case 2:
					cantusArray.push(4); //V
					index = 4;
				break;
			}
		break;
	
		case 2: //iii
			cantusArray.push(2);
			var iii = rand(2);
			switch (ii)
			{
				case 0:
					cantusArray.push(3); //IV
					index = 3;
				break;
				
				case 1:
					cantusArray.push(5); //vi
					index = 3;				
				break;
				
			}
		break;
		case 3: //IV
			cantusArray.push(3);
			var iv = rand(2);
			switch (iv)
			{
				case 0:
					cantusArray.push(1); //ii
					index = 2;
				break;
				
				case 1:
					cantusArray.push(4); //V
					index = 4;
				break;
			}
		break;
		case 4: //V
			cantusArray.push(4);
			var v = rand(3);
			switch (v)
			{
				case 0:
					cantusArray.push(0); //I
					index = 0;
				break;
				
				case 1:
					cantusArray.push(5); //vi
					index = 5;
				break;
				
				case 2:
					cantusArray.push(6); //viio
					index = 6;
				break;
			}
		break;
		case 5: //vi
			cantusArray.push(5);
			var iii = rand(3);
			switch (ii)
			{
				case 0:
					cantusArray.push(2); //ii
					index = 1;
				break;
				
				case 1:
					cantusArray.push(4); //V
					index = 4;
				break;
				
				case 2:
					cantusArray.push(2); //viio
					index = 6;
				break;
			}
		break;
		case 6: //viio
			cantusArray.push(2);
			var viio = rand(2);
			switch (viio)
			{
				case 0:
					cantusArray.push(0); //I
					index = 0;
				break;
				
				case 1:
					cantusArray.push(4); //V
					index = 4;
				break;
			}
		break;
	
	}
	
	if (cantusArray.length > 100) {
		return 1;
		}


}
	
	
function rand(range) {
	var i;
	i = (Math.random() * range) ;
	i = i - (i % 1);		
	return i; 
}