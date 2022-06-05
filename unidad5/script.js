// 1.-
const direccionCorreo = 'correo@gmail.com';
const passCorreo = 'd987412365';

var correoIngreso = prompt('ingrese su correo');
var passIngreso = prompt('ingrese su contraseña');

if (correoIngreso == direccionCorreo && passIngreso == passCorreo) {
    alert('Se ha logueado de manera correcta')
} else {
    console.log('El correo y/o contraseña son incorrectos')
};

// 2.-
var colorRemera = prompt('Ingrese su color de remera');
var edad = prompt('Ingrese su edad');

if(edad >= 18 && (colorRemera == 'rojo' || 'roja')) {
    alert('Ud puede ingresar al bar')
} else {
    alert('No puede ingresar al bar porque es menor de 18 años y/o no tiene remera roja')
};

// 3.-
var nota1 = prompt('Ingrese su primra nota');
var nota2 = prompt('Ingrese su segunda nota');
var promedio = (nota1 + nota2) / 2;

if(nota1 > 7 && nota2 > 7 && promedio > 7) {
    alert('Ha aprovado la materia')
} else {
    alert('Vuelva a su casa a estudiar')
};
