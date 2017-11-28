// Sa se scrie o functie care primeste 3 parametrii (numere naturale). Functia trebuie sa returneze diferenta dintre al 3-lea si maxmul dintre primele doua.

function getMax (a,b) {
	if (a>b) {
		return a
	}
	else{
		return b
	}
};

function diferenta (a,b,c) {
	return c-getMax(a,b)
};