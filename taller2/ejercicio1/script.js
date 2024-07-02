const parrafo = document.getElementById("parrafo");

const boton = document.getElementById("boton");

function clickBoton() {
	if (parrafo.innerHTML == "test") {
		parrafo.innerHTML = "Hola";
	} else if (boton.getAttribute("estado") == "noClick") {
		parrafo.innerHTML = "Mundo";
		boton.setAttribute("estado", "click");
	} else if (
		boton.getAttribute("estado") == "click" &&
		parrafo.innerHTML == "Mundo"
	) {
		parrafo.innerHTML = "Taller IDS";
	} else {
		parrafo.innerHTML = "test";
		boton.setAttribute("estado", "noClick");
	}
}

const parrafo2 = document.getElementById("parrafo2");
function botenes(boton) {
	let numero = Number(boton.getAttribute("numero"));

	switch (numero) {
		case 1:
			parrafo2.innerHTML = 1;
			break;
		case 2:
			parrafo2.innerHTML = 2;
			break;
		case 3:
			parrafo2.innerHTML = 3;
			break;
		case 4:
			parrafo2.innerHTML = 4;
			break;
		case 5:
			parrafo2.innerHTML = 5;
			break;
	}
}
