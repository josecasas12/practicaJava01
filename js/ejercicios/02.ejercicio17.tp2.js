/*
EJERCICIO 17
------------
Consigna:
Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
Ejemplo:
Input: Hola mundo
Output: la vocal ‘o’ está en la posición 1
*/

let textoEntrada = prompt("Ingrese un texto:");
if (textoEntrada !== null) {
  let vocales = "aeiouAEIOU";
  let posicion = -1;
  let vocalEncontrada = "";

  for (let i = 0; i < textoEntrada.length; i++) {
    if (vocales.indexOf(textoEntrada[i]) !== -1) {
      posicion = i;
      vocalEncontrada = textoEntrada[i];
      break;
    }
  }

  document.write("<h3>Ejercicio 17</h3>");
  if (posicion !== -1) {
    document.write("<p>La primera vocal es '<strong>" + vocalEncontrada + "</strong>' y está en la posición " + posicion + "</p>");
  } else {
    document.write("<p>No se encontraron vocales en el texto ingresado.</p>");
  }
}
