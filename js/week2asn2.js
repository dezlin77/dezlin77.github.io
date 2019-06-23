/*
find largest number function without using math.max()
*/

//method 1

var values = {n1:2, n2:3};

values.calculate = function calculate(args){
	let result;
	if(args==="+"){
		result = values.n1+values.n2;
	} else if (args==="-"){
		result=values.n1-values.n2;
	} else{

		result="Not supported";
	}
	return result;
}

console.log(args="-");

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
