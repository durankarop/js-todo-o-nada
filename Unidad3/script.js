/* Desde aquí empieza el TP 3-1 */
// Punto 1
var noValgoNi5 = 4;

console.log(noValgoNi5);

// Punto 2
var miAnioDeNacimiento = 1988;
var meGustariaTener80Anios = 80;
var voyATener80ElAnio = miAnioDeNacimiento + meGustariaTener80Anios;

console.log(voyATener80ElAnio);

// Punto 3
var costoDeUnaTele = 10000;
var ahorros = 9000;
var dineroQueMeFalta = costoDeUnaTele - ahorros;

console.log( dineroQueMeFalta);

// Punto 4
var diasPorAnio = 365;
var cantidadDeAniosEnUnaDecada = 10;
var cantidadDeDiasEnUnaDecada = diasPorAnio * cantidadDeAniosEnUnaDecada;

console.log( cantidadDeDiasEnUnaDecada);

// Punto 5
var pizza = 8;
var cantidadDePizzas = 24 / pizza;

console.log(cantidadDePizzas);

// Punto 6
var miAnimalFavorito = 'ornitorrinco';

console.log(miAnimalFavorito == 'perro');

// Punto 7
console.log('flan' != 'flan con dulce de leche');


// Punto 8
var soyMayorDeEdad = 33 > 17;

console.log(soyMayorDeEdad);

// Punto 9
var soyMenorDe25 = 33 < 25; 

console.log(soyMenorDe25);

// Punto 10
var estamosEnEnero  = 'marzo' === 'enero';

console.log(estamosEnEnero);

// Punto 11
var noEstamosEnEnero = 'marzo' !== 'enero';

console.log(noEstamosEnEnero);

// Punto 12
var miNotaEnElParcial = 8;
var notaMinimaParaAprobar = 6;
var estoyAprobado = miNotaEnElParcial >= notaMinimaParaAprobar;

console.log(estoyAprobado);

// Punto 13
var esHoraDeAlmorzar = 20 <= 12;

console.log(esHoraDeAlmorzar);

/* Desde aquí empieza el punto 3 del TP 3-2 */

// Punto 3.a
var base = 10;
var altura = 5;
var pi = 3.14;
var radio = 6;
var superficieTriangulo = (base * altura) / 2;
var superficieRectangulo = base * altura;
var superficieCirculo = pi * (radio * radio);

console.log(superficieRectangulo);
console.log(superficieTriangulo);
console.log(superficieCirculo);

// Punto 3.b
var numA = 92;
var numB = 48;
var numC = 25;
var suma = numA + numB + numC;
var producto = numA * numB * numC;
var promedio = (numA + numB + numC) / 3;

console.log(suma);
console.log(producto);
console.log(promedio);

// Punto 3.c
var descuento = 0.15;
var itemA = 10000;
var itemB = 22000;
var itemC = 8500;
var itemD = 17500;
var itemE = 25000;
var sumaTotal = itemA + itemB + itemC + itemD + itemE;
var precioFinal = sumaTotal * descuento;
var descuentoFinal = sumaTotal - precioFinal;

console.log('El descuento aplicado es de ' + '$' + descuentoFinal);
console.log('El precio total final de la compra es de ' + '$' + precioFinal);

// Punto 3.d
var dolar = 114.09
var pesos = parseInt(prompt('Ingrese la cantidad a convertir:'));
var dolarAPesos = pesos * dolar;

console.log(dolarAPesos);

// Punto 3.e
var valorFactura = parseInt(prompt('Ingrese el monto de su factura:'));
var iva = valorFactura * 0.21;

console.log(iva);


