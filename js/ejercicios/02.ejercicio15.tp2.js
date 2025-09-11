/*
EJERCICIO 15 (versión mejorada)
-------------------------------
Consigna:
Realiza un script que cuente el número de vocales que tiene un texto y muestre el resultado por pantalla.
*/

let textoVocales = prompt("Ingrese un texto:");
if (textoVocales !== null) {
  let contador = 0;
  let vocales = "aeiouAEIOU";

  for (let i = 0; i < textoVocales.length; i++) {
    if (vocales.indexOf(textoVocales[i]) !== -1) {
      contador++;
    }
  }

  document.write("<h3>Ejercicio 15</h3>");
  document.write("<p>El texto ingresado tiene <strong>" + contador + "</strong> vocal(es).</p>");
}