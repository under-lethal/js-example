//Determinați câte sticle de x litri cu apă trebuie deschise pentru a umple un vas de y litri.

function cateSticleUmpleGaleata( litriSticla, litriGaleata) {
	if (litriSticla > litriGaleata) {
		return 1
	}
	else{
		return Math.ceil(litriGaleata/litriSticla)
	};
}

function cateSticleUmpleGaleata2( sticla, galeata){
	return Math.ceil(sticla/galeata)

}

//functia merge si fara Math.ceil