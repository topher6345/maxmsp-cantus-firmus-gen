outlets = 3;

function msg_int(val)
{
io = [[0,4,7], 
	  [2,5,9],
	  [4,7,11],
      [5,9,12],
      [7,11,14],
      [9,0,4],
      [2,11,5]];


for (var i=0; i < 3; i++) {
	
	outlet(i, io[val][i]);
	
	}


}


