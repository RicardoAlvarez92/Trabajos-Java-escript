var num1 = parseInt(prompt("Num1"));  
var num2 = parseInt(prompt("num2"));

function suma (num1, num2){
    var resultado1 = num1 + num2;
    console.log(resultado1);
    document.write("Suma:", resultado1);
}

function resta (num1, num2){
    var resultado2 =num1 - num2;
    console.log(resultado2);
    document.write("   Resta: ", resultado2);
}

function multi (num1, num2){
    var resultado3 = num1 * num2;-
    console.log(resultado3);
    document.write("   Multiplicacion:", resultado3);
}

function divi (num1, num2){
    var resultado4 = num1 / num2;
    console.log(resultado4);
    document.write("   Division:", resultado4);
}

suma(num1, num2);
resta(num1, num2)
divi(num1, num2);
multi(num1, num2);
