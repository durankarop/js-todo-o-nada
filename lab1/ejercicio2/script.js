var palabra1 = "hola";
var palabra2 = "chau";
var frase = "";

/* Para corroborar que cada código esté bien tuve que comentar cada los demás
porque la verdad no tenía ganas de darle nuevas variables a cada uno para que
no se sobreescriban los valosres */

/* Test A */
fraseA = palabra1 + " mundo";
alert(palabra1);
alert(palabra2);
alert(fraseA);

/* Test B */
palabra1 = palabra2;
palabra2 = palabra1;
frase = "frase nueva";
alert(palabra1);
alert(palabra2);
alert(frase);

/* Test C */
palabra1 = palabra1 + " " + palabra2;
palabra2 = palabra2 + " " + palabra2;
frase = palabra2 + " y " + palabra2;
alert(palabra1);
alert(palabra2);
alert(frase);

/* Test D */
palabra1 = "1+1";
palabra2 = "2/0";
frase = palabra1 + "=2";

alert(palabra1);
alert(palabra2);
alert(frase);



