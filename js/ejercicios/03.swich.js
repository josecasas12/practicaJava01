//crea un programa donde el usuario ingrese un numero  y le muestre por pantalla el dia de semana

/* const opcion = parseInt(
  prompt(
    "ingresa un numero de la semana : 1-lunes 2-martes 3-miercoles 4-jueves 5-viernes 6-sabado 7-domingo"
  )
);

if (opcion === 1) {
  document.writeln("lunes");
} else if (opcion === 2) {
  document.writeln("martres");
} else if (opcion === 3) {
  document.writeln("miercoles");
} else if (opcion === 4) {
  document.writeln("jueves");
} else if (opcion === 5) {
  document.writeln("viernes");
} else if (opcion === 6) {
  document.writeln("sabado");
} else if (opcion === 7) {
  document.writeln("domingo");
}else{
    document.writeln('ingresaste una opccion erronea')
}*/

/*
switch(opcion){
case 1:
    //todas las lineas que quiero hacer si la oppcion es 1 
    break;
    default:

}
*/
const opcion = parseInt(
  prompt(
    "ingresa un numero de la semana : 1-lunes 2-martes 3-miercoles 4-jueves 5-viernes 6-sabado 7-domingo"
  )
);

switch (opcion) {
  case 1:
    document.writeln("lunes");
    break;
  case 2:
    document.writeln("martres");
    break;
  case 3:
    document.writeln("miercoles");
    break;
  case 4:
    document.writeln("jueves");
    break;
  case 5:
    document.writeln("viernes");
    break;
  case 6:
    document.writeln("sabado");
    break;
  case 7:
    document.writeln("domingo");
    break;
}
