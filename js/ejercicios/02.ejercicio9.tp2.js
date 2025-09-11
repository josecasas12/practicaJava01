/*
EJERCICIO 9
-----------
Consigna:
Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.

Ejemplo:
1
2
3
4 (Múltiplo de 4)
5
——————————————
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/

let resultado = "";

for (let i = 1; i <= 500; i++) {
  resultado += i;

  if (i % 4 === 0) {
    resultado += " (Múltiplo de 4)";
  }
  if (i % 9 === 0) {
    resultado += " (Múltiplo de 9)";
  }

  resultado += "\n";

  if (i % 5 === 0) {
    resultado += "——————————————\n";
  }
}

alert(resultado);
