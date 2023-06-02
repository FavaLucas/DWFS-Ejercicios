import * as rls from "readline-sync";

let alturaIngresada: number = rls.questionFloat("Ingrese altura: ");
let alturaPermitida: number = 1.30;

if (alturaIngresada <= alturaPermitida){
    console.log("No es lo suficientemente alto para subir al juego");
}else{
        console.log("Puede subir al juego, disfrute la atraccion");
    }
        

