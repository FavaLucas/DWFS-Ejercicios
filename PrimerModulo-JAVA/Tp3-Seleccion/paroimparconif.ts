import * as rls from "readline-sync";

let num: number = rls.questionInt ("Ingrese el numero a evaluar: ");

if (num == 0){
    console.log ("El numero", num, "no es par ni impar");
}else if (num%2 == 0){
    console.log ("El numero", num, "es par");
}else {
    console.log ("El numero", num, "es impar");
}