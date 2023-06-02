//Defino un arreglo unidimensional donde guardo los nombres de mis 5 trabajadores
let trabajadores: string[] = ["Andres", "Marianela", "Sandra", "Marcos", "Adriana"];

//Defino mi matriz con la cantidad de productos que elaboro cada trabajador
let prodSemanal: number[][] = [
    [33558, 36165, 34240, 39273, 34360, 21347, 20817, 21494, 23062, 31908, 31369, 30658],
    [27541, 32480, 25053, 34823, 32942, 38477, 23757, 21422, 26699, 22045, 25625, 25866],
    [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25168, 26759, 29793, 36218],
    [27243, 38777, 21346, 30691, 27542, 39771, 31807, 31641, 18850, 39837, 40182, 28006],
    [32687, 25217, 26844, 37033, 35244, 25702, 25781, 35525, 34874, 34841, 20563, 23540]
]
// *************************************  Funcion para ejercicio A  ****************************************//
function promedioSemanalProduccion(arreglo: number[]): number {
    let produccionSemanal: number = 0;
    for (let semana: number = 0; semana < arreglo.length; semana++) {
        produccionSemanal += arreglo[semana];
    }
    produccionSemanal / arreglo.length;
    return produccionSemanal / arreglo.length;
}
// *************************************  Funcion para ejercicio B  ****************************************//
function promedioMensualProduccion(arreglo: number[]): number[] {
    let promMensual: number[] = new Array(3);
    promMensual = [0, 0, 0];
    promMensual[0] = arreglo[0] + arreglo[1] + arreglo[2] + arreglo[3] / 4;
    promMensual[1] = arreglo[4] + arreglo[5] + arreglo[6] + arreglo[7] / 4;
    promMensual[2] = arreglo[8] + arreglo[9] + arreglo[10] + arreglo[11] / 4;
    return promMensual;
}
// *************************************  Funcion para ejercicio C  ****************************************//
function ventaMaximaSYM(arreglo: number[]) {
    let mes: number[] = new Array(3);
    for (let i: number = 0; i < arreglo.length; i++) {
        if (i = 3) {
            let maximo: number = 0;
            let indice: number = 0;
            mes = [arreglo[0], arreglo[1], arreglo[2], arreglo[3]];
            for (let semana: number = 0; semana < mes.length; semana++) {
                if (maximo < mes[semana]) {
                    maximo = mes[semana];
                    indice = semana;
                }
            }
            console.log("La produccion maxima del primer mes es de", maximo, "correspondiente a la semana", indice + 1);
        }
        if (i = 7) {
            let maximo: number = 0;
            let indice: number = 0;
            mes = [arreglo[4], arreglo[5], arreglo[6], arreglo[7]];
            for (let semana: number = 0; semana < mes.length; semana++) {
                if (maximo < mes[semana]) {
                    maximo = mes[semana];
                    indice = semana;
                }
            }
            console.log("La produccion maxima del segundo mes es de", maximo, "correspondiente a la semana", indice + 1);
        }
        if (i = 11) {
            let maximo: number = 0;
            let indice: number = 0;
            mes = [arreglo[8], arreglo[9], arreglo[10], arreglo[11]];
            for (let semana: number = 0; semana < mes.length; semana++) {
                if (maximo < mes[semana]) {
                    maximo = mes[semana];
                    indice = semana;
                }
            }
            console.log("La produccion maxima del segundo mes es de", maximo, "correspondiente a la semana", indice + 1);
        }
    }
    console.log("---------------------------------------------------------------------------------------------------------------------------")
}
// *************************************  Funcion para ejercicio D  ****************************************//
function determinarPremios(arreglo: number[]) {
    let promMensual: number[] = new Array(3);
    promMensual = [0, 0, 0];
    promMensual[0] = arreglo[0] + arreglo[1] + arreglo[2] + arreglo[3] / 4;
    promMensual[1] = arreglo[4] + arreglo[5] + arreglo[6] + arreglo[7] / 4;
    promMensual[2] = arreglo[8] + arreglo[9] + arreglo[10] + arreglo[11] / 4;
    for (let mes: number = 0; mes < promMensual.length; mes++) {
        if (promMensual[mes] < 95000) {
            console.log("En el mes", mes, "no recibira premio");
        }
        if (promMensual[mes] >= 95000 && promMensual[mes] < 100000) {
            console.log("En el mes", mes, "recibira $10000 de premio");
        }
        if (promMensual[mes] >= 100000) {
            console.log("En el mes", mes, "recibira $20000 de premio");
        }
    }
}
// *************************************  Funcion para ejercicio E  ****************************************//
function premiosMensuales(arreglo: number[][]) {
    let prodMensual: number[] = new Array(3);
    prodMensual = [0, 0, 0];
    let premiosMensual: number[] = new Array(3);
    premiosMensual = [0, 0, 0];
    for (let fila: number = 0; fila < arreglo.length; fila++) {
        prodMensual[0] = arreglo[fila][0] + arreglo[fila][1] + arreglo[fila][2] + arreglo[fila][3] / 4;
        prodMensual[1] = arreglo[fila][4] + arreglo[fila][5] + arreglo[fila][6] + arreglo[fila][7] / 4;
        prodMensual[2] = arreglo[fila][8] + arreglo[fila][9] + arreglo[fila][10] + arreglo[fila][11] / 4;
        for (let mes: number = 0; mes < prodMensual.length; mes++) {
            if (prodMensual[mes] < 95000) {
                premiosMensual[mes] += 0;
            }
            if (prodMensual[mes] >= 95000 && prodMensual[mes] < 100000) {
                premiosMensual[mes] += 10000;
            }
            if (prodMensual[mes] >= 100000) {
                premiosMensual[mes] += 20000;
            }
        }
    }
    console.log("El total de premios a pagar en Enero es de:", premiosMensual[0]);
    console.log("El total de premios a pagar en Febrero es de:", premiosMensual[1]);
    console.log("El total de premios a pagar en Marzo es de:", premiosMensual[2]);
    console.log("Sumando un total de:", premiosMensual[0] + premiosMensual[1] + premiosMensual[2]);
}








// *************************************  Funcion para ejercicio F  ****************************************//
function evaluarSemanas(matriz: number[][], arreglo: string[]) {
    //El for va a dejar fija la columna por que se va a evaluar a todos los operadores en la misma semana
    console.log(matriz);

    for (let semana: number = 0; semana < matriz.length; semana++) {
        for (let operador: number = 0; operador < matriz[semana].length; operador++) {
            
            matriz[semana][operador] = 1;
            
        }
    }
}







/*
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio A
for (let operario: number = 0; operario < trabajadores.length; operario++) {
    console.log("El promedio semanal elaborado por", trabajadores[operario], "es de:", promedioSemanalProduccion(prodSemanal[operario]));
}
console.log("--------------------------------------------------------------------------------------------------------------------------");
//Ejercicio B
for (let operario: number = 0; operario < trabajadores.length; operario++) {
    console.log("El promedio mensual de productos elaborados por", trabajadores[operario], "es de:", promedioMensualProduccion(prodSemanal[operario]));
}
console.log("--------------------------------------------------------------------------------------------------------------------------");
//Ejercicio C
for (let operario: number = 0; operario < trabajadores.length; operario++) {
    console.log(trabajadores[operario])
    ventaMaximaSYM(prodSemanal[operario]);
}
console.log("--------------------------------------------------------------------------------------------------------------------------");
//Ejercicio D
for (let operario: number = 0; operario < trabajadores.length; operario++) {
    console.log(trabajadores[operario])
    determinarPremios(prodSemanal[operario]);
}
console.log("--------------------------------------------------------------------------------------------------------------------------");

//Ejercicio E
premiosMensuales(prodSemanal);
console.log("--------------------------------------------------------------------------------------------------------------------------");
*/
//Ejercicio F
let tablero: number[][] = [
    [7, 7, 7],
    [7, 7, 7],
    [7, 7, 7],
    [7, 7, 7]
]
evaluarSemanas(tablero, trabajadores);
evaluarSemanas(prodSemanal, trabajadores);
console.log("--------------------------------------------------------------------------------------------------------------------------");
