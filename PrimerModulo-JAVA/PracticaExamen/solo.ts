//Defino un arreglo unidimensional donde guardo los nombres de mis 5 vendedores
let operarios: string[] = ["Andres", "Marianela", "Sandra", "Marcos", "Adriana"];

let produccionSemanal: number[][] = [
    [33558, 36165, 34240, 39273, 34360, 21347, 20817, 21494, 23062, 31908, 31369, 30658],
    [27541, 32480, 25053, 34823, 32942, 38477, 23757, 21422, 26699, 22045, 25625, 25866],
    [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25168, 26759, 29793, 36218],
    [27243, 38777, 21346, 30691, 27542, 39771, 31807, 31641, 18850, 39837, 40182, 28006],
    [32687, 25217, 26844, 37033, 35244, 25702, 25781, 35525, 34874, 34841, 20563, 23540]
]

//----------------------------------------------Ejercicio A , B, C y D------------------------------------------------ 
function Produccion(arreglo: number[]): any[] {
    let retorno: any[] = new Array(2);
    let sumaSemana: number = 0;
    let arregloMes: number[] = new Array(3);
    let mes: number = 0;
    //Aca estoy trabajando con un solo vector, un solo operario
    for (let semana: number = 0; semana < arreglo.length; semana++) {
        sumaSemana += arreglo[semana];
        //Aca sumo 4 semanas para calcular el promedio del mes
        if (semana == 3 || semana == 7 || semana == 11) {
            if (semana == 3) {
                arregloMes[mes] = (arreglo[0] + arreglo[1] + arreglo[2] + arreglo[3]) / 4;
                let produccionMaxima: number = 0;
                let indiceMaximo: number = 0;
                for (let indice: number = 0; indice < 4; indice++) {
                    if (produccionMaxima < arreglo[indice]) {
                        produccionMaxima = arreglo[indice];
                        indiceMaximo = indice + 1;
                    }
                }
                console.log("La produccion mas alta del primer mes es:", produccionMaxima, "que corresponde a la semana", indiceMaximo);
            } else if (semana == 7) {
                arregloMes[mes] = (arreglo[4] + arreglo[5] + arreglo[6] + arreglo[7]) / 4;
                let produccionMaxima: number = 0;
                let indiceMaximo: number = 0;
                for (let indice: number = 4; indice < 8; indice++) {
                    if (produccionMaxima < arreglo[indice]) {
                        produccionMaxima = arreglo[indice];
                        indiceMaximo = indice + 1;
                    }
                }
                console.log("La produccion mas alta del segundo mes es:", produccionMaxima, "que corresponde a la semana", indiceMaximo);
            } else if (semana == 11) {
                arregloMes[mes] = (arreglo[8] + arreglo[9] + arreglo[10] + arreglo[11]) / 4;
                let produccionMaxima: number = 0;
                let indiceMaximo: number = 0;
                for (let indice: number = 8; indice < 12; indice++) {
                    if (produccionMaxima < arreglo[indice]) {
                        produccionMaxima = arreglo[indice];
                        indiceMaximo = indice + 1;
                    }
                }
                console.log("La produccion mas alta del tercer mes es:", produccionMaxima, "que corresponde a la semana", indiceMaximo);

            }
            /*
            if (arregloMes[mes] * 4 <= 110000) {
                console.log("No tuvo premio en el mes");
            } else if (arregloMes[mes] * 4 > 110000 && arregloMes[mes] * 4 <= 125000) {
                console.log("El premio del mes es de $10.000");
            } else if (arregloMes[mes] * 4 > 125000) {
                console.log("El premio del mes es de $20.000");
            }
            */
            mes = mes + 1;
        }
    }
    retorno[0] = sumaSemana / arreglo.length;
    retorno[1] = arregloMes;
    return retorno;
}
//Arreglo donde voy a guardar los datos que retorna mi funcion Produccion
let datos: any[] = new Array(3);
//Con este FOR, voy a moverme renglon por renglon seleccionando 1 solo vendedor para pasarlo a la funcion
for (let operario: number = 0; operario < produccionSemanal.length; operario++) {
    //Funcion que envia como parametro solo 1 fila de mi matriz, la que corresponde a cada operario
    console.log(operarios[operario]);
    datos = Produccion(produccionSemanal[operario]);
    console.log("Fabrico", datos[0], "articulos semanales en promedio.");
    console.log("Su promedio de produccion mensual es de:", datos[1]);
    console.log("-----------------------------------------------------------------------------------------------");
}
///////////////////////////////////////////////////////////////
