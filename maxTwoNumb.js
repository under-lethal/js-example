//Să se scrie un program care determină maximul a două numere întregi citite dintr-un fişier.

function maxTwoNumbers(a,b){
	if (a > b) {
		return a
	}
	else{
		return b
	}

}
	

	var num1 = 40
	var num2 = 15

	var max12 = maxTwoNumbers(num1,num2)
	console.log(max12)