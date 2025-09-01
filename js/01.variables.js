//comentario de una linea
/* este es un comentario 
de miltiples lineas */

//como mandar mensajes en js//
console.log("hola mundo");
console.info("hola mundo");
console.warn("hola mundo 3");
console.error("hola mundo 4");

document.writeln("hola mundo 5");
document.writeln("<h1 class='text-blue'>hola mundo 6</h1>");

//ventanas emergentes
//alert('practica de alert')

//variables var - let - const

const taiga =
  "https://tree.taiga.io/project/earias08-comision-web16/us/74?kanban-status=10073551";
console.log(taiga);

document.writeln("<p>" + taiga + "</p>");
document.writeln(taiga);
document.writeln("un poco de texto");

let curso = "fullstack MERN";

document.writeln("<br>" + curso);

curso = "nextjs";

document.writeln("<br>" + curso);
const anio = 2025; //number
const encendido = false; //bolean

//solicitar al usuario su nombre y saludarlo por pantalla

const nombreUsuario = prompt("ingresa tu nombre");
console.log(nombreUsuario);
document.writeln(' <br> Bienvenido ' + nombreUsuario )
document.writeln(`<br> Hola ${nombreUsuario}`)