import * as rls from "readline-sync";

let usuario: string = "Juan";
let contraseña: string = "claveJuan";
let usuarioIngresado: string = rls.question("Ingrese su usuario: ");
let contraseñaIngresada: string = rls.question("Ingrese su contraseña: ");

if (usuario == usuarioIngresado && contraseña == contraseñaIngresada){
    console.log("Bienvenido, ha ingresado al ejercicio");
}else{
    console.log("Ha ingresado datos invalidos, no puede ingresar.");
}
    
