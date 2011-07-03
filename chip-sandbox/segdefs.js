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
	[1]: '+' if pullup,
	[2]: layer number,
	[3+]: segs array

*/

var segdefs = [
[ 1,'+',1,0,0,0,100,10,100,10,0],
[ 2,'+',2, 0,0, 0,100, 800,100, 700,0],
[ 2,'+',0, 0,0, 0,800, 800,600, 600,0],
[ 3,'+',3,10,10,20,20,30,30],
[ 4	,'+',4,10,10,20,20,30,30],
[ 5	,'+',5,10,10,20,20,30,30],
]
