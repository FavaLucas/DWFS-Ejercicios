import * as rls from "readline-sync";

//Defino mi arreglo de tipo string, donde cargo los nombres de cada vendedor 
let vendedores: string[] = ["Camila", "Franco", "Sofia", "Matias", "Agustina"];

//Defino un arreglo de tipo number para cada vendedor, donde cargo las ventas semanales de cada vendedor (12 semanas) 
let vendedor1: number[] = [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652];
let vendedor2: number[] = [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855];
let vendedor3: number[] = [10584, 33473, 4300, 24598, 33955, 24040, 39173, 25542, 45105, 26759, 29790, 36218];
let vendedor4: number[] = [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006];
let vendedor5: number[] = [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562];

function obtenerMejorSemana(vendedor: number[]): number {
    //Variable para guardar la venta maxima del vendedor
    let ventaMaxima: number = 0;
    //Variable para guardar la mejor semana del vendedor
    let mejorSemana: number = 1;
    for (let i: number = 0; i < vendedor.length; i++) {
        if (ventaMaxima < vendedor[i]) {
            ventaMaxima = vendedor[i];
            //A la mejor semana le sumo 1 para no iniciar de la semana 0
            mejorSemana = i + 1;
        }
    }
    return mejorSemana;
}

function obtenerPeorSemana(vendedor: number[]): number {
    //Variable para guardar la venta minima del vendedor
    let ventaMinima: number = vendedor[0];
    //Variable para guardar la peor semana del vendedor
    let peorSemana: number = 1;
    for (let i: number = 0; i < vendedor.length; i++) {
        if (ventaMinima > vendedor[i]) {
            ventaMinima = vendedor[i];
            //A la peor semana le sumo 1 para no iniciar de la semana 0
            peorSemana = i + 1;
        }
    }
    return peorSemana;
}

function obtenerMejorMes(semana: number): number {
    let mejorMes: number = 0;
    if (semana <= 4) {
        mejorMes = 1;
    } else {
        if (semana <= 8) {
            mejorMes = 2;
        } else {
            mejorMes = 3;
        }
    }
    return mejorMes;
}

function obtenerPeorMes(semana: number): number {
    let peorMes: number = 0;
    if (semana <= 4) {
        peorMes = 1;
    } else {
        if (semana <= 8) {
            peorMes = 2;
        } else {
            peorMes = 3;
        }
    }
    return peorMes;
}

function obtenerPromedioSemanal(vendedor: number[]): number {
    let promedioSemanal: number = 0;
    let acumulador: number = 0;
    for (let i: number = 0; i < vendedor.length; i++) {
        acumulador = acumulador + vendedor[i];
    }
    promedioSemanal = acumulador / vendedor.length
    return promedioSemanal
}

function obtenerPromedioMensual(vendedor: number[]): number {
    let promedioMensual: number = 0;
    let acumulador: number = 0;
    for (let i: number = 0; i < vendedor.length; i++) {
        acumulador = acumulador + vendedor[i];
    }
    promedioMensual = acumulador / 3
    return promedioMensual
}


///////////
function obtenerMejorVendedorPorSemana(vendedores: string[], vendedor1: number[], vendedor2: number[], vendedor3: number[], vendedor4: number[], vendedor5: number[]) {
    let arregloSemanal: number[] = new Array(5);
    for (let i: number = 0; i < 12; i++) {
        arregloSemanal[i] = [vendedor1[i], vendedor2[i], vendedor3[i], vendedor4[i], vendedor5[i]];
    }
}
///////////

//INICIO DE MI PROGRAMA
//Ejercicio A / B / C / D

for (let i: number = 0; i <= vendedores.length; i++) {
    console.log("Vendedor: ", vendedores[i]);
    if (i == 0) {
        console.log("La mejor semana es: ", obtenerMejorSemana(vendedor1));
        console.log("El mejor mes es: ", obtenerMejorMes(obtenerMejorSemana(vendedor1)));
        console.log("La peor semana es: ", obtenerPeorSemana(vendedor1));
        console.log("El peor mes es: ", obtenerPeorMes(obtenerPeorSemana(vendedor1)));
        console.log("Su promedio semanal de ventas es de: ", obtenerPromedioSemanal(vendedor1));
        console.log("Su promedio mensual de ventas es de: ", obtenerPromedioMensual(vendedor1));
        console.log("-------------------------------------------------------------------------------");
    } else {
        if (i == 1) {
            console.log("La mejor semana es: ", obtenerMejorSemana(vendedor2));
            console.log("El mejor mes es: ", obtenerMejorMes(obtenerMejorSemana(vendedor2)));
            console.log("La peor semana es: ", obtenerPeorSemana(vendedor2));
            console.log("El peor mes es: ", obtenerPeorMes(obtenerPeorSemana(vendedor2)));
            console.log("Su promedio semanal de ventas es de: ", obtenerPromedioSemanal(vendedor2))
            console.log("Su promedio mensual de ventas es de: ", obtenerPromedioMensual(vendedor2));
            console.log("-------------------------------------------------------------------------------");
        } else {
            if (i == 2) {
                console.log("La mejor semana es: ", obtenerMejorSemana(vendedor3));
                console.log("El mejor mes es: ", obtenerMejorMes(obtenerMejorSemana(vendedor3)));
                console.log("La peor semana es: ", obtenerPeorSemana(vendedor3));
                console.log("El peor mes es: ", obtenerPeorMes(obtenerPeorSemana(vendedor3)));
                console.log("Su promedio semanal de ventas es de: ", obtenerPromedioSemanal(vendedor3))
                console.log("Su promedio mensual de ventas es de: ", obtenerPromedioMensual(vendedor3));
                console.log("-------------------------------------------------------------------------------");
            } else {
                if (i == 3) {
                    console.log("La mejor semana es: ", obtenerMejorSemana(vendedor4));
                    console.log("El mejor mes es: ", obtenerMejorMes(obtenerMejorSemana(vendedor4)));
                    console.log("La peor semana es: ", obtenerPeorSemana(vendedor4));
                    console.log("El peor mes es: ", obtenerPeorMes(obtenerPeorSemana(vendedor4)));
                    console.log("Su promedio semanal de ventas es de: ", obtenerPromedioSemanal(vendedor4))
                    console.log("Su promedio mensual de ventas es de: ", obtenerPromedioMensual(vendedor5));
                    console.log("-------------------------------------------------------------------------------");
                } else {
                    if (i == 4) {
                        console.log("La mejor semana es: ", obtenerMejorSemana(vendedor5));
                        console.log("El mejor mes es: ", obtenerMejorMes(obtenerMejorSemana(vendedor5)));
                        console.log("La peor semana es: ", obtenerPeorSemana(vendedor5));
                        console.log("El peor mes es: ", obtenerPeorMes(obtenerPeorSemana(vendedor5)));
                        console.log("Su promedio semanal de ventas es de: ", obtenerPromedioSemanal(vendedor5))
                        console.log("Su promedio mensual de ventas es de: ", obtenerPromedioMensual(vendedor5));
                        console.log("-------------------------------------------------------------------------------");
                    }
                }
            }
        }
    }
}
