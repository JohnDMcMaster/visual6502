/*
defines an array segdefs[], with a typical element 
[4,'+',1,4351,8360,4351,8334,4317,8334,4317,8360], 
giving the 
	node number, 
	the pullup status, 
	the layer index 
	and a list of coordinate pairs for a polygon. 
	There is one element for each polygon on the chip, and therefore generally several elements for each node. The pullup status can be '+' or '-' and should be consistent for all of a node's entries - it's an historical anomaly that this information is in segdefs. Not all chip layers or polygons appear in segdefs, but enough layers appear for an appealing and educational display. 

Format:
[ 
	[0]: w: net/node name.  Can also be special ngnd and npwr?,
		ngnd = nodenames['gnd'];
		npwr = nodenames['vcc'];
	[1]: '+' if pullup,
	[2]: layer number,
	[3+]: segs array

*/

var segdefs = [
//Poly
//Bottom switching transistor
[ 4,'-',5, 177,94, 193,95, 193,179, 178,180],
//Top pullup transistor (resistor)
[ 3,'+',5, 175,215, 193,213, 192,301, 176,301],

/*
Poly
*/
//Pullup
//Left VDD
[ 1,'+',4, 128,214, 177,214, 177,265, 129,264],
//Right
[ 3,'+',1, 191,214, 250,213, 251,265, 191,264],
//Switch
//Left
[ 2,'-',3, 128,95, 179,94, 177,146, 128,146],
//Right
[ 3,'+',1, 192,94, 252,95, 251,146, 193,146],

/*
Metal
*/
//Topmost metal: pullup VDD
[ 1,'+',0, 144,227, 162,226, 162,329, 143,330],
//Bottom
[ 2,'+',0, 144,50, 162,50, 162,127, 145,128],
//T to the right
[ 3,'+',0, 217,108, 239,106, 239,178, 328,175, 329,195, 239,193, 239,300, 175,300, 176,282, 218,284],
//Input to the left
[ 4,'-',0, 66,163, 192,161, 193,179, 64,179],
]

