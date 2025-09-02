const precioProducto = parseFloat(prompt("ingresa el valor del producto"));

let precioFinal = precioProducto;

if (precioProducto > 2000) {
  const descuento = precioProducto * 0.25;
  precioFinal = precioProducto - descuento;
}
document.writeln(
  `el precio original del producto es de $${precioProducto}, te realizamos un descuento de %25, por lo tanto el precio final es de $${precioFinal} `
);


