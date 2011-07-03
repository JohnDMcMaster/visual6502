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
//Bottom real transistors
[ 2,'-',1, 130,94, 251,95, 252,146, 129,146],
//Top pullup transistor (resistor)
[ 1,'+',4, 128,214, 251,214, 251,265, 129,265],

/*
Poly
*/
//Pullup
[ 1,'-',3, 175,214, 191,214, 192,300, 176,300],
//Switch
[ 4,'-',3, 177,95, 193,95, 192,180, 177,180],

/*
Metal
*/
//Topmost metal: pullup VDD
[ 1,'+',0, 143,227, 162,227, 161,286, 192,283, 192,338, 175,339, 177,295, 145,298],
//Bottom
[ 2,'+',0, 144,50, 162,50, 162,127, 145,128],
//T to the right
[ 3,'+',0, 218,106, 239,105, 238,177, 328,175, 328,194, 239,194, 240,247, 217,247],
//Input to the left
[ 4,'-',0, 66,163, 192,161, 193,179, 64,179],
]
