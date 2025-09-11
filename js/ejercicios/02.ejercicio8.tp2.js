/*
EJERCICIO 8
-----------
Consigna:
Crea un script para generar una pirámide con los números del 1 al número que indique el usuario (no mayor de 50).

Ejemplo si el usuario indica 6:
1
12
123
1234
12345
123456
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
    for (let i = 1; i <= numero; i++) {
      for (let j = 1; j <= i; j++) {
        resultado += j;
      }
      resultado += "\n";
    }
    alert(resultado);
  }
}
