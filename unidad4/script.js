// TP N°4
// Ejercicio 1
var num1 = parseInt(prompt('ingrese un número A'));
var num2 = parseInt(prompt('ingrese un número B'));

if (num1 < num2) {
    alert('El menor de los dos números ingresados es ' + num1 + '.');
} else {
    alert('El menor de los dos números ingresados es ' + num2 + '.');
};

// Ejercicio 2
var numA = parseInt(prompt('ingrese un número'));
var parImpar = numA % 2;

if (parImpar == 0) {
    alert('El número ingresado es par.')
} else {
    alert('El número ingresado es impar.')
};

// Ejercicio 3
var ganeLaCarrera = false;

if (ganeLaCarrera = true) {
    console.log('Ganaste.')
} else {
    console.log('Perdiste.')
}

// Ejercicio 4
var posicionEnLaCarrera = 6;
if (posicionEnLaCarrera == 1) {
    console.log('FELICITACIONES, SALISTE 1RO.')
} else if (posicionEnLaCarrera == 2) {
    console.log('Te falto poquito para ganar.')
} else if (posicionEnLaCarrera == 3) {
    console.log('Sos un orgullo para tu familia')
} else if (posicionEnLaCarrera > 3) {
    console.log('Volvé a tu casa.')
} else {
    console.log('No tires fruta.')
};

// Ejercicio 5
var posicionEnLaCarrera = prompt('Ingrese la posición.');
var leyenda;
if (posicionEnLaCarrera == 1) {
    leyenda = 'FELICITACIONES, SALISTE 1RO.'
} else if (posicionEnLaCarrera == 2) {
    leyenda = 'Te faltó poquito para ganar.'
} else if (posicionEnLaCarrera == 3) {
    leyenda = 'Sos un orgullo para tu familia.'
} else if (posicionEnLaCarrera > 3) {
    leyenda = 'Volvé a tu casa.'
} else {
    leyenda = 'No tires fruta.'
};

console.log(leyenda);

// Ejercicio 6
var importeAPagar = parseInt(prompt('Ingrese el monto a abonar'));
var descuento = 0.8;
if (importeAPagar > 1000) {
    console.log('El importe a abonar es de $' + (importeAPagar * descuento))
} else {
    console.log('El importe a abonar es de $' + importeAPagar)
};

// Ejercicio 7
var montoVendido = parseInt(prompt('Ingrese el monto a vender.'));
var codigoVendedor = parseInt(prompt('Por favor ingrese el código de vendedor'));
var comision;

if (codigoVendedor < 100) {
    comision = 0.3;
    console.log ('Importe de la venta: $' + montoVendido);
    console.log ('Codigo ingresado: $' + codigoVendedor);
    console.log ('Comisión: ' + (montoVendido * comision));
} else if (codigoVendedor >= 100 && codigoVendedor <= 200) {
    comision = 0.2;
    console.log ('Importe de la venta: $' + montoVendido);
    console.log ('Codigo ingresado: $' + codigoVendedor);
    console.log ('Comisión: ' + (montoVendido * comision));
} else if (codigoVendedor > 200) {
    comision = 0.1;
    console.log ('Importe de la venta: $' + montoVendido);
    console.log ('Codigo ingresado: ' + codigoVendedor);
    console.log ('Comisión: $' + (montoVendido * comision));
};

// Ejercicio 8
var d = prompt('Ingrese en nro el día de la semana del 1 (lunes) a 7 (domingo');

if (d == 1) {
    console.log('Lunes')
} else if (d == 2) {
    console.log('Martes')
} else if (d ==3) {
    console.log('Miércoles')
} else if (d == 4) {
    console.log('Jueves')
} else if (d == 5) {
    console.log('Viernes')
} else if (d == 6) {
    console.log('Sábado')
} else if (d == 7) {
    console.log('Domingo')
};

// Ejercicio 9
var grupoPersonas = prompt('ingrese el nro de integrantes del grupo');
var precioNormal = 1.5;
var precioReducido = 0.5;

if (grupoPersonas >= 8) {
    console.log(grupoPersonas * precioReducido)
} else {
    console.log(grupoPersonas * precioNormal)
};

// Ejercicio 10
var precio = parseInt(prompt('Valor a abonar'));
var descuentoFarmacia = 0.15;
var conDescuento = precio - (precio * descuentoFarmacia)

 if (precio > 100) {
     console.log('El valor de la compra es de $' + precio)
     console.log('El descuento es de $' + (precio * descuentoFarmacia))
     console.log('El precio final es de $' + conDescuento)
 } else {
     console.log('El precio a abonar es de $' + precio)
 };