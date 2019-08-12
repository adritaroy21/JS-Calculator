var expression;
var num = "0";

function update(value) {	
	num = num + value;
	document.getElementById("output").innerHTML = num;
}

function operator(op){
	if(expression)
		expression = expression + parseFloat(num) + op;
	else
	    expression = parseFloat(num) + op;
	num = "";
	document.getElementById("output").innerHTML = op;
}


function execute() {
	expression = expression + parseFloat(num);
	if(isNaN(parseFloat(eval(expression))))
		document.getElementById("output").innerHTML = "Error";
	else
	    document.getElementById("output").innerHTML = parseFloat(eval(expression));
}

function reset() {
	document.getElementById("output").innerHTML = "";
	expression = "";
	num = "";
}
