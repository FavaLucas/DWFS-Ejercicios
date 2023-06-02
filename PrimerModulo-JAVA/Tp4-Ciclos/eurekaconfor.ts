import * as rls from "readline-sync";

let password: string = "eureka";
let intentos: number

for (intentos = 1; intentos <=3; intentos++){
    console.log ("Intento: ", intentos,"/3");
    let passwordIngresado : string = rls.question("Para ingresar coloque su password: ");

    if (password == passwordIngresado){
        console.log("Bienvenido, se ha loggeado exitosamente");
        break;

    }else{
        if (intentos < 3){
        console.log ("Pruebe nuevamente");
        }else{
            console.log("Supero el limite de intentos y no se podra loggear");
        }
    }
}