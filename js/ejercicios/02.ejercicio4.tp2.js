/*
EJERCICIO 4
-----------
Consigna:
Realiza un script que pida números hasta que se pulse “cancelar”.
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/


let suma = 0;
let continuar = true;


while (continuar) {
let valor = prompt("Ingrese un número:");


if (valor !== null) {
if (isNaN(valor)) {
alert("No es un número válido");
} else {
suma = suma + Number(valor);
}
}


continuar = confirm("¿Desea seguir ingresando números?");
}


alert("La suma total de los números es: " + suma);