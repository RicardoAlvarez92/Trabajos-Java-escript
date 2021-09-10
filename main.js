//comentario de 1 linea

/* Comentario multilinea 
Mi primer hola mundo
alert("Hola Mundo");
alert ("Holaaaa");

*/

//variables
//El valor puede cambiar
var nombre = "Ricardo Daniel";
var apellidos = "Alvarez Perez";
var edad = 29;

edad = 50;

let telefono;
let colorfavorito = "Verde";
let comidafavorita = "Enchiladas Verdes"
telefono = 123456;

//Constantes
//El valor no puede variar
const gravedad = 9.8
//gravedad = "No hay Gravedad";
const estudiantes = 20;

//Let y var diferencias 
var numero = 40;

if(true) {
    var numero = 50;
    console.log(numero);
}

    console.log(numero);//50

    var numero2 = 100;
    numero2 = 1000;
    console.log(numero2); //100
    let otronumero = 100;

    if(true) {
        let numero2 = 5;
        console.log(numero2); //5
        let numero3 = 27;
        console.log(numero3);
    }

    console.log(numero2); //100
    //console.log(numero3);

    console.log(otronumero);







alert (nombre);

console.log(typeof(nombre));
console.log(typeof(edad));