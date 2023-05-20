const header = document.querySelector('.header')
window.addEventListener('scroll', () => {
	// efecto parallax
	let posicion = window.pageYOffset || document.documentElement.scrollTop;

	let elemento1 = document.getElementById("icon-heart");
	let elemento2 = document.getElementById("icon-fire");

	elemento1.style.bottom = posicion * 0.1 + "px";
	elemento2.style.top = posicion * 0.1 + "px";
})