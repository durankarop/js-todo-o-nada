var cantidadDeVentanasEnMiCasa = 11;
var soyHumano = true;
var miGustoDePizzaPreferido = 'Roquefort';
// acá no entendí si hay que hacerlo con arreglo o si modificar nomás la misma variable con
// dichos valores;
var indeterminado = [false, 'Hola', 0, 'Minions'];

console.log(cantidadDeVentanasEnMiCasa);
console.log(soyHumano);
console.log(miGustoDePizzaPreferido);
console.log(indeterminado);
// O si era esto lo que se buscaba
indeterminado = false, 'Hola', 0, 'Minions';

// O tal vez
indeterminado = false;
console.log(indeterminado);

indeterminado = 'Hola';
console.log(indeterminado);

indeterminado = 0;
console.log(indeterminado);

indeterminado = 'Minions';
console.log(indeterminado);