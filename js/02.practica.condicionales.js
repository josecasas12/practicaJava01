//disenar un programa que solicite una edad y te diga si podemos votar o no
//menores de 16 anos no pueden votar
//entre 18 y 69 anos estas obligado a votar
//16 y 17 , y mayores de 70 es optativo

let edad = parseInt(prompt("ingresa tu edad"));

console.log(edad);

if (edad < 16) {
  document.writeln("No puede votar");
} else {
  if (edad >= 18 && edad <= 69) {
    document.writeln("debe votar si o si");
  } else {
    document.writeln("es optativo votar");
  }
}
