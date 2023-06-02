import * as rls from 'readline-sync';

let meses: string[] = new Array(12);

meses[0] = "Enero";
meses[1] = "Febrero";
meses[2] = "Marzo";
meses[3] = "Abril";
meses[4] = "Mayo";
meses[5] = "Junio";
meses[6] = "Julio";
meses[7] = "Agosto";
meses[8] = "Septiembre";
meses[9] = "Octubre";
meses[10] = "Noviembre";
meses[11] = "Diciembre";

//Recorro el arreglo posicion a posicion iniciando desde 0
//Termina en la posicion 11 ya que el 12 queda fuera del while
let indice: number = 0;
while (indice < 12) {
    console.log(meses[indice]);
    indice++;
}


/*
let numeroMes: number = rls.questionInt("Ingrese el numero de mes: ")
//Como las posiciones del arreglo son el Mes - 1, tenemos que restarle a la opcion ingresada por el usuario
if ((numeroMes > 12) || (numeroMes < 1)) {
    console.log("Su numero de mes es invalido");
} else {
    numeroMes = numeroMes - 1;
    console.log("Su numero de mes se llama: ", meses[numeroMes]);
}
*/