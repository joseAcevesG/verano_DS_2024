const padre = document.getElementById("padre");
const padre2 = document.getElementById("padre2");
const parrafo = document.getElementById("parrafo");

let rectangulo = new Rectangulo();

function crearNodos() {
	for (let i = 0; i < 5; i++) {
		let nodeTemp = document.createElement("p");
		padre.append(nodeTemp);
		nodeTemp.innerHTML = i + 1;
	}
}

function quitarNodo() {
	while (padre.firstElementChild != null) {
		padre.firstElementChild.remove();
	}

	while (padre2.firstElementChild != null) {
		padre2.firstElementChild.remove();
	}
}

function listaComida() {
	let comidas = ["sopa", "carne", "manzana", "pan"];

	for (let i = 0; i < comidas.length; i++) {
		console.log("hola");
		let nodeTemp = document.createElement("p");
		padre2.append(nodeTemp);
		nodeTemp.innerHTML = comidas[i];
	}
}

function Rectangulo() {
	this.altura = 10;
	this.base = 20;

	this.area = function () {
		parrafo.innerHTML = "el area es " + this.altura * this.base;
	};

	this.perimetro = function () {
		parrafo.innerHTML = "el perimetro es " + (this.altura * 2 + this.base * 2);
	};
}
