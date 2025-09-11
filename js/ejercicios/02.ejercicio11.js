const nombre1 = prompt("ingresa el primer nombre");
const edad1 = parseInt(prompt("ingresa la edad de la primera persona "));
const nombre2 = prompt("ingresa el primer nombre");
const edad2 = parseInt(prompt("ingresa la edad de la primera persona "));
const nombre3 = prompt("ingresa el primer nombre");
const edad3 = parseInt(prompt("ingresa la edad de la primera persona "));
console.log(edad1, edad2, edad3);
const edadMaxima = Math.max(edad1, edad2, edad3);
console.log(Math.max(edad1, edad2, edad3));

if (edadMaxima === edad1) {
  document.writeln(
    `la persona mas frande es ${nombre1} y tiene ${edadMaxima} anos`
  );
} else if (edadMaxima === edad2) {
  document.writeln(
    `la persona mas frande es ${nombre2} y tiene ${edadMaxima} anos`
  );
} else {
  document.writeln(
    `la persona mas frande es ${nombre3} y tiene ${edadMaxima} anos`
  );
}
