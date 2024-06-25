const COLUMNAS = 50;
const FILAS = 20;
const LADO = 20;
const ANCHO_CANVAS = COLUMNAS * LADO;
const ALTO_CANVAS = FILAS * LADO;

let canvas;

let snake;

let arriba;
let abajo;
let izquierda;
let derecha;

let comida;

let frames;

function setup() {
	canvas = createCanvas(ANCHO_CANVAS, ALTO_CANVAS);
	frames = 10;
	frameRate(frames);

	snake = new Snake();
	arriba = createVector(0, -1);
	abajo = createVector(0, 1);
	derecha = createVector(1, 0);
	izquierda = createVector(-1, 0);

	comida = createVector();
	posicionarComida();
}

function windowResized() {
	let escala = windowWidth / width;
	if (escala >= 1) {
		return;
	}

	canvas.style("width", width * escala + "px");
	canvas.style("height", height * escala + "px");
}

function draw() {
	background("black");

	snake.dibujar();

	fill("crimson");
	rect(comida.x * LADO, comida.y * LADO, LADO, LADO);

	if (snake.posicion.equals(comida)) {
		posicionarComida();
		snake.tamaño++;
		frameRate(frames);
	}
}

function keyPressed() {
	if (!isLooping()) {
		juegoNuevo();
	}

	switch (keyCode) {
		case UP_ARROW:
			if (snake.cola.length != 0 && snake.direccion.equals(abajo)) {
				break;
			}
			snake.direccion = arriba;
			break;
		case DOWN_ARROW:
			if (snake.cola.length != 0 && snake.direccion.equals(arriba)) {
				break;
			}
			snake.direccion = abajo;
			break;
		case RIGHT_ARROW:
			if (snake.cola.length != 0 && snake.direccion.equals(izquierda)) {
				break;
			}
			snake.direccion = derecha;
			break;
		case LEFT_ARROW:
			if (snake.cola.length != 0 && snake.direccion.equals(derecha)) {
				break;
			}
			snake.direccion = izquierda;
			break;
	}
}

function posicionarComida() {
	comida = createVector(floor(random(COLUMNAS)), floor(random(FILAS)));
	let flag;
	do {
		flag = false;
		for (let i = 0; i < snake.cola.length; i++) {
			if (comida.equals(snake.cola[i])) {
				flag = true;
				break;
			}
		}
	} while (flag);
}

function juegoNuevo() {
	snake = new Snake();
	posicionarComida();
	loop();
}

function juegoTerminado() {
	if (snake.choque()) {
		noLoop();
		textAlign(CENTER, CENTER);
		textSize(50);
		text("GAME OVER", width / 2, height / 2);
	}
}

function Snake() {
	this.posicion = createVector(COLUMNAS / 2, FILAS / 2);
	this.direccion = createVector();

	this.cola = [];

	this.tamaño = 0;

	this.bordes = function () {
		if (this.posicion.x >= COLUMNAS) {
			this.posicion.x = 0;
		}

		if (this.posicion.x < 0) {
			this.posicion.x = COLUMNAS - 1;
		}
		if (this.posicion.y >= FILAS) {
			this.posicion.y = 0;
		}

		if (this.posicion.y < 0) {
			this.posicion.y = FILAS - 1;
		}
	};

	this.choque = function () {
		for (let i = 0; i < this.cola.length; i++) {
			if (this.posicion.equals(this.cola[i])) {
				return true;
			}
		}
		return false;
	};

	this.dibujar = function () {
		fill("white");
		rect(this.posicion.x * LADO, this.posicion.y * LADO, LADO, LADO);

		for (let i = 0; i < this.cola.length; i++) {
			fill("white");
			rect(this.cola[i].x * LADO, this.cola[i].y * LADO, LADO, LADO);
		}

		this.cola.push(this.posicion.copy());
		if (this.cola.length > this.tamaño) {
			this.cola.splice(0, 1);
		}

		this.posicion.add(this.direccion);

		this.bordes();

		juegoTerminado();
	};
}
