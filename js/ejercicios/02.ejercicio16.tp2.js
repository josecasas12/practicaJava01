/*
EJERCICIO 16
------------
Consigna:
Realiza un script que pida una cadena de texto y la devuelva al revés.
Ejemplo: si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

let cadenaReversa = prompt("Ingrese una cadena de texto:");
if (cadenaReversa !== null) {
  let invertida = "";
  for (let i = cadenaReversa.length - 1; i >= 0; i--) {
    invertida += cadenaReversa[i];
  }

  document.write("<h3>Ejercicio 16</h3>");
  document.write("<p>Texto original: " + cadenaReversa + "</p>");
  document.write("<p>Texto invertido: <strong>" + invertida + "</strong></p>");
}
