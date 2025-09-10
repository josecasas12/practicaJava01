/*
EJERCICIO 1 (versión básica con salida en pantalla)
---------------------------------------------------
Consigna:
Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/

let edad = prompt("Ingrese su edad:");

if (isNaN(edad)) {
  alert("La edad ingresada no es válida");
} else if (edad >= 18) {
  alert("Ya puede conducir");
} else {
  alert("Todavía no puede conducir");
}