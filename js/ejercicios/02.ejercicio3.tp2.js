/*
EJERCICIO 3
-----------
Consigna:
Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión (-).

Nota: usar confirm().
*/

let cadenas = "";
let continuar = true;

while (continuar) {
  let texto = prompt("Ingrese una cadena de texto:");

  if (texto !== null) {
    if (cadenas === "") {
      cadenas = texto;
    } else {
      cadenas = cadenas + "-" + texto;
    }
  }

  continuar = confirm("¿Desea seguir ingresando cadenas?");
}

alert("Cadenas concatenadas: " + cadenas);
