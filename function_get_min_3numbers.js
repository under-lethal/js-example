// Sa se scrie un program care determina minimul a 3 numere intregi.

function getMinNumbers (a,b,c){
	if ((a<b)&&(a<c)) {
		return a
	}
	else if (b<c){
		return b
	}
	else{
		return c
	}
}