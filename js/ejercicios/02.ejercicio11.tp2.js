/*
EJERCICIO 11
------------
Consigna:
Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.
*/

let nombre1 = prompt("Ingrese el primer nombre:");
let edad1 = parseInt(prompt("Ingrese la edad de " + nombre1 + ":"));

let nombre2 = prompt("Ingrese el segundo nombre:");
let edad2 = parseInt(prompt("Ingrese la edad de " + nombre2 + ":"));

let nombre3 = prompt("Ingrese el tercer nombre:");
let edad3 = parseInt(prompt("Ingrese la edad de " + nombre3 + ":"));

if (isNaN(edad1) || isNaN(edad2) || isNaN(edad3)) {
  alert("Alguna de las edades no es válida");
} else {
  let mayor = Math.max(edad1, edad2, edad3);
  let nombreMayor = "";

  if (mayor === edad1) {
    nombreMayor = nombre1;
  } else if (mayor === edad2) {
    nombreMayor = nombre2;
  } else {
    nombreMayor = nombre3;
  }

  alert("El mayor es " + nombreMayor + " con " + mayor + " años.");
}
