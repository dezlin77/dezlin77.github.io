/*
find 2 different methods to create a proper object as a parameter of the calculate function
*/

//method 1

var foo1 = {
	op: "+",
	n1: 1,
	n2: 2
};


function calculate(args){
	let result;
	if (args.op==="+") {
		result = args.n1 + args.n2;
	}
	else if (args.op==="-") {
		result = args.n1 - args.n2;
	}
	else {
		result = "Not supported";
	}
	return result;
}

calculate(foo1);


//method 2

var values2 = [2, 3];

values.calculates = function calculates(argss){
	let result;
	if(argss==="+"){
		result = values2[0]+values2[1];
	} else if (argss==="-"){
		result=values2[0]-values2[1];
	} else{

		result="Not supported";
	}
	return result;
}

console.log(argss="-");
