import * as rls from "readline-sync";

let numeroIngresado: number = rls.questionInt("Ingrese el numero que quiera evaluar: ");

while (numeroIngresado != 0)
    if (numeroIngresado % 2 == 0) {
        console.log("El numero", numeroIngresado, "es par");
        break
    } else {
        console.log("El numero", numeroIngresado, "es impar");
        break
    }
if (numeroIngresado == 0){
    console.log ("El numero ingresado es ", numeroIngresado, "no se puede evaluar");
}