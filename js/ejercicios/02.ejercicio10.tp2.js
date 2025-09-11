const filas = parseInt(prompt("Ingrese la cantidad de filas"));
const columnas = parseInt(prompt("Ingrese la cantidad de columnas"));

if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
  document.writeln("<p>Debes ingresar números válidos mayores que 0.</p>");
} else {
  let total = filas * columnas;

  document.writeln(`<h3>Tabla de ${filas} filas x ${columnas} columnas</h3>`);
  document.writeln(`<table border="1" cellspacing="0" cellpadding="6"><tbody>`);

  for (let i = 1; i <= filas; i++) {
    document.writeln(`<tr>`);
    for (let j = 1; j <= columnas; j++) {
      document.writeln(`<td>${total--}</td>`);
    }
    document.writeln(`</tr>`);
  }

  document.writeln(`</tbody></table>`);
}
