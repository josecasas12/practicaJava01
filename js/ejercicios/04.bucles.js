// estructura de repeticion
// tipo de bucles while, do-wile ,for

// wile - mientras se cumple una condicion logica entonces se hace tal tarea
/*
wile(condicion logica){
todas las lineas de codigo que planeo repetir varias veces
agregar una linea que haga que la condicio logica deje de cumplirse en algun momento
}
*/

/*let Renglon = 1;
while (Renglon <= 50) {
  document.writeln(`<p>Renglon numero ${Renglon}</p>`);
  Renglon++; //renglon = vrenglon + 1
}*/

//do-while hacer - mientras
/*
do{
todas las lineas de codigo que planeo repetir varias veces
agregar algo que haga que el bucle se deje de repetir  en algun momento
}wile (condicion logica)

*/

/*let pasos = 0;

do {
  document.writeln(`<p>pasos numero ${pasos}</p>`);

  pasos++;
} while (pasos < 5);*/

//for
/*
for(inicializar una variable; condicion logica; actualizar la variable para que en algun momento se cumpla la condicion logica ){
todas las lineas que olaneo repetir varias veces
}
*/

for (let contador = 10; contador >= 0; contador--) {
  document.writeln(`<p>Cuenta regresiva ${contador}</p>`);
}

