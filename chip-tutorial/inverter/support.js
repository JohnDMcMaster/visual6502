// sandbox chip-specific support functions
//
// may override function definitions made previously

chipname='uv';

grChipSize=800;
main_area_left_gutter = 0

ngnd = nodenames['gnd'];
npwr = nodenames['vcc'];

nodenamereset = 'reset';

function setupTransistors() {
	for(i in transdefs) {
		var tdef = transdefs[i];
		var name = tdef[0];
		var gate = tdef[1];
		var c1 = tdef[2];
		var c2 = tdef[3];
		var bb = tdef[4];
		if(tdef[6]) {
			// just ignore all the 'weak' transistors for now
			continue;
		}
		//Make C1 more "important" than C2
		//That is if we don't 
		if(c1==ngnd) {
			c1=c2;c2=ngnd;
		}
		if(c1==npwr) {
			c1=c2;
			c2=npwr;
		}
		var trans = {name: name, on: false, gate: gate, c1: c1, c2: c2, bb: bb};
		//alert("name: " + trans.name + ", gate: " + trans.gate + ", c1: " + trans.c1 + ", c2: " + trans.c2 + ", bb: " + trans.bb );
		nodes[gate].gates.push(trans);
		nodes[c1].c1c2s.push(trans);
		nodes[c2].c1c2s.push(trans);
		transistors[name] = trans;
	}
}


function initChip(){
	var start = now();
	for(var nn in nodes) {
		nodes[nn].state = false;
		nodes[nn].float = true;
	}

	nodes[ngnd].state = false;
	nodes[ngnd].float = false;
	nodes[npwr].state = true;
	nodes[npwr].float = false;
	for(var tn in transistors) {
		transistors[tn].on = false;
	}
	recalcNodeList(allNodes()); 
	refresh();
	cycle = 0;
	trace = Array();
}

function listActiveTCStates() {
	return "";
}

function chipStatus(){
	//updateLogbox(logThese);
}

// javascript derived from http://segher.ircgeeks.net/6800/OPS
var disassembly={
0x00: "!",
0x01: "nop",
};

