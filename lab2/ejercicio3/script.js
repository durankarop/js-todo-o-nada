var nombre = prompt('Introduzca su nombre');
var apellido = prompt('introduzca su apellido');
var edad = prompt('introduzca su edad');
var sueldo = parseFloat(prompt('¿Cuál es tu sueldo?'));
var bonus = parseFloat(prompt('¿Cuánto fue tu bonus de este mes?'));
var resultado = sueldo + bonus;
var espacio = ' ';


document.write('El nombre de usuario es' + espacio + nombre + espacio + apellido);
document.write('<br>');
document.write('La edad del usuario es' + espacio + edad);
document.write('<br>');
document.write('El resultado final de su sueldo es' + espacio + resultado);
