/*
EJERCICIO 5
-----------
Consigna:
Realizar una página con un script que calcule el valor de la letra de un número de DNI.

El algoritmo para calcular la letra del dni es el siguiente:
- El número debe ser entre 0 y 99999999.
- Debemos calcular el resto de la división entera entre el número y el número 23.
- Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
- Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
- Deberá repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo:
Input: 40773821 → Output: L
*/

let letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
let continuar = true;

while (continuar) {
  let valor = prompt("Ingrese su número de DNI (0 - 99999999):");

  if (valor === null) {
    continuar = false;
  } else if (isNaN(valor)) {
    alert("No es un número válido");
  } else {
    let numero = Number(valor);
    if (numero < 0 || numero > 99999999) {
      alert("El número debe estar entre 0 y 99999999");
    } else {
      let resto = numero % 23;
      let letra = letras[resto];
      alert("La letra de su DNI es: " + letra);
    }
  }
  
  if (continuar) {
    continuar = confirm("¿Desea ingresar otro DNI?");
  }
}
