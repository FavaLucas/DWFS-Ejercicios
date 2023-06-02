import * as rls from "readline-sync";

let contraseña: string = "eureka"
let contraseñaIngresada: string = rls.question("Para ingresar coloque su password: ");
let intentos: number = 0

while ((intentos<3) && (contraseña != contraseñaIngresada)){
    contraseñaIngresada = rls.question("Password incorrecto, ingreselo nuevamente: ");
    intentos = intentos + 1;
    console.log("Recuerde que tiene 3 intentos, intento: " ,intentos,"/3");
}
if (contraseña != contraseñaIngresada){
    console.log("Ingreso su password 3 veces mal y ya no tiene mas intentos");
    console.log("Intente nuevamente mas tarde");
}else{
    console.log ("Bienvenido, pudo ingresar");
}
