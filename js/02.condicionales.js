//pedir al usuario una edad y decir si es mayo de edad o no
//18 anos si es mayor de edad
//condicionales simples
/*
if(condicion){
codigo a ejecutar si se cumple la condicion
}
*/

//condicionales dobles
/*
if(condicion){
codigo a ejecutar si se cumple la condicion
}else{codigo a ejecutar si no cumple la condicion

}
*/


const edad = parseInt(prompt('ingresa tu edad'))
console.log(edad);

if(edad >= 18){
    document.writeln('sos mayor de edad')
}else{
    document.writeln('sos menor de edad')
}
