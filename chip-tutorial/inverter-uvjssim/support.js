// sandbox chip-specific support functions
//
// may override function definitions made previously

chipname='uv';

grChipSize=400;
main_area_left_gutter = 0

go_timeout = 1000

ngnd = nodenames['gnd'];
npwr = nodenames['vcc'];

nodenamereset = 'reset';

function initChip(){
	/*
	Get the chip into a chip specific initial state
	*/
	
	//For benchmarking and such
	var start = now();
	
	//All nodes off and 
	for(var nn in nodes) {
		nodes[nn].state = false;
		nodes[nn].float = true;
	}

	//Initialize GND
	nodes[ngnd].state = false;
	nodes[ngnd].float = false;
	//Initialize VDD
	nodes[npwr].state = true;
	nodes[npwr].float = false;
	//Default all transistors to off
	//Important since it will determine how we will propagate changes
	for(var tn in transistors) {
		transistors[tn].on = false;
	}
	
	//transistors['t1'].on = false;
	//Generate a baseline
	//Try to generate a stable state given the above
	recalcNodeList(allNodes()); 
	refresh();
	cycle = 0;
	trace = Array();
	running = true;
}

/*
Simple logic chip stubs
*/
/*
Print registers and such, we have none
Could use the input and output pins I guess if we really wanted to
Used extensivly in macros.js
*/
function chipStatus(){}
//Simple logic chips have no bus to read/write, skip over
//Executed as part of clocking (halfStep()) in macros.js
//Alternativly we could have just re-implemented these functions
function handleBusRead() {}
function handleBusWrite() {}
//Stub implementation in case not using memtable.js
//No memory to track
function setupTable() {}

