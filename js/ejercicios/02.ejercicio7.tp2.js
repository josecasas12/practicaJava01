/*
EJERCICIO 7
-----------
Consigna:
Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
...
333
22
1
*/

let numero = prompt("Ingrese un número (máximo 50):");

if (isNaN(numero)) {
  alert("Debe ingresar un número válido");
} else {
  numero = Number(numero);
  if (numero > 50 || numero <= 0) {
    alert("El número debe estar entre 1 y 50");
  } else {
    let resultado = "";
    for (let i = numero; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        resultado += i;
      }
      resultado += "\n";
    }
    alert(resultado);
  }
}