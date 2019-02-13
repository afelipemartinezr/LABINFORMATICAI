var vp = document.getElementById("tablero");
var papel = vp.getContext("2d");
var x = 50;
var y = 50;

//Declaro objeto Teclas
var teclas =
{
	LEFT : 37,
	UP : 38,
	RIGHT : 39,
	DOWN : 40,
	MOV : 10
};

//Declaro objeto fondo
var fondo = {
	url: "images/tablero.png",
	cargaOK : false
};

//Declaro objeto cuadradoEstatico
var cuadradoEstatico = {
	url: "images/cuadradoestatico.png",
	cargaOK : false
};

//Declaro objeto cuadradoEstatico
var cuadrado = {
	url: "images/cuadrado.png",
	cargaOK : false
};

//Detecto cuando presionan teclado
document.addEventListener("keydown", mueve);

//Agrego imagen al objeto fondo
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

//Agrego imagen albojeto cuadradoEstatico
cuadradoEstatico.imagen = new Image();
cuadradoEstatico.imagen.src = cuadradoEstatico.url;
cuadradoEstatico.imagen.addEventListener("load",cargarcuadradoEstatico);

//Agrego imagen albojeto cuadradoEstaticos
cuadrado.imagen = new Image();
cuadrado.imagen.src = cuadrado.url;
cuadrado.imagen.addEventListener("load",cargarCuadrado);



//CARGAR FONDO
function cargarFondo()
{
	fondo.cargaOK=true;
	dibujar();
}

//CARGAR cuadradoEstatico
function cargarcuadradoEstatico()
{
	cuadradoEstatico.cargaOK=true;
	dibujar();
}

function cargarCuadrado()
{
	cuadrado.cargaOK=true;
	dibujar();
}

//DIBUJO ELEMENTOS
function dibujar(evento)
{
	if (fondo.cargaOK)
	{
		papel.drawImage( fondo.imagen , 0 , 0 );
	}

	if (cuadradoEstatico.cargaOK)
	{
			papel.drawImage( cuadradoEstatico.imagen, 1 , 1 );
	}

	if (cuadrado.cargaOK)
	{
			papel.drawImage( cuadrado.imagen, x, y );
	}

	if(x<=20 && y<=20)
	{
			alert("CHOQUE");
			x=100;
			y=160;
			dibujar();
	}

}

//MUEVE EL cuadradoEstatico DEPENDIENDO DE LA TECLA PULSADA
function mueve(evento)
{
		switch (evento.keyCode)
		{
				case teclas.UP :
					y-=teclas.MOV;
					dibujar();
				break;

				case teclas.DOWN:
					y+=teclas.MOV;
					dibujar();
				break;

				case teclas.RIGHT:
					x+=teclas.MOV;
					dibujar();
				break;

				case teclas.LEFT:
					x-=teclas.MOV;
					dibujar();
				break;

				default:
		}
}
