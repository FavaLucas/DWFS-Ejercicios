import * as rls from 'readline-sync';


/**
 * Function que busca venta maxima y retorna semana
 * @param ventas 
 * @returns 
 */
function ventaMaxima(ventas: number[]): number {
    let semana: number = 0;
    let ventaMayor: number = ventas[0];
    for (let i: number = 0; i < ventas.length; i++) {
        if (ventaMayor < ventas[i]) {
            ventaMayor = ventas[i];
            semana = i;
        }
    }
    return semana + 1;
}

/**
 * function que busca venta minima y retorna semana
 * @param ventas 
 * @returns 
 */
function ventaMinima(ventas: number[]): number {
    let semana: number = 0;
    let ventaMenor: number = ventas[0];
    for (let i: number = 0; i < ventas.length; i++) {
        if (ventaMenor > ventas[i]) {
            ventaMenor = ventas[i];
            semana = i;
        }
    }
    return semana + 1;
}
/**
 * A partir de una semana retorna el mes
 * @param semana 
 * @returns 
 */
function busquedaMes(semana: number): number {
    let mes: number = 0;
    if (semana <= 4) {
        mes = 1;
    } else {
        if (semana > 4 && semana <= 8) {
            mes = 2;
        } else {
            if (semana > 8 && semana <= 12)
                mes = 3;
        }
    }
    return mes;
}


/**
 * funtion que retorna promedio semanal de ventas
 * @param ventas 
 * @returns 
 */
function promedioSemanal(ventas: number[]): number {
    let promedio: number = 0;
    for (let i: number = 0; i < ventas.length; i++) {
        promedio += ventas[i];
    }
    return promedio / 12;
}

/**
 * function que retorna el promedio mensual en un array
 * @param ventas 
 * @returns 
 */
function promedioMensual(ventas: number[]): number[] {

    let meses: number[] = [0, 0, 0];

    for (let i: number = 0; i < ventas.length; i++) {
        if (i <= 4) {
            meses[0] += ventas[i];
        } else {
            if (i > 4 && i <= 8) {
                meses[1] += ventas[i];
            } else {
                if (i > 8 && i <= 12) {
                    meses[2] += ventas[i];
                }
            }
        }
    }
    meses[0] = meses[0] / 4;
    meses[1] = meses[1] / 4;
    meses[2] = meses[2] / 4;
    return meses;
}
/**
 * Suma las venta de cada mes
 * @param ventas 
 * @returns 
 */
function ventaMensual(ventas: number[]): number[] {

    let meses: number[] = [0, 0, 0];

    for (let i: number = 0; i < ventas.length; i++) {
        if (i <= 4) {
            meses[0] += ventas[i];
        } else {
            if (i > 4 && i <= 8) {
                meses[1] += ventas[i];
            } else {
                if (i > 8 && i <= 12) {
                    meses[2] += ventas[i];
                }
            }
        }
    }
    return meses;
}

/**
 * mejor vendedor de cada semana
 * @param ven1 
 * @param ven2 
 * @param ven3 
 * @param ven4 
 * @param ven5 
 * @param vendedor 
 */
function mejorVendedorSem(ven1: number[], ven2: number[], ven3: number[], ven4: number[], ven5: number[], vendedor: string[]) {
    let ventas: number[] = new Array(5);
    for (let i: number = 0; i < 12; i++) {
        ventas = [ven1[i], ven2[i], ven3[i], ven4[i], ven5[i]]
        console.log('el mejor vendedo de la semana ' + i + ' fue: ', vendedor[ventaMaxima(ventas) - 1], 'con ' + ventas[ventaMaxima(ventas) - 1]);
    }
}
/**
 * funcion mejor vendedor de cada mes
 * @param ven1 
 * @param ven2 
 * @param ven3 
 * @param ven4 
 * @param ven5 
 * @param vendedor 
 */
function mejorVendedorMes(ven1: number[], ven2: number[], ven3: number[], ven4: number[], ven5: number[], vendedor: string[]) {

    let ventas: number[] = new Array(5);
    for (let i: number = 0; i < 3; i++) {
        ventas = [ven1[i], ven2[i], ven3[i], ven4[i], ven5[i]]
        console.log('el mejor vendedor del mes ' + i + ' fue: ', vendedor[ventaMaxima(ventas) - 1], 'con ' + ventas[ventaMaxima(ventas) - 1]);
    }
}

/**
 * funcion peor vendedor de cada mes
 * @param ven1 
 * @param ven2 
 * @param ven3 
 * @param ven4 
 * @param ven5 
 * @param vendedor 
 */
function peorVendedorMes(ven1: number[], ven2: number[], ven3: number[], ven4: number[], ven5: number[], vendedor: string[]) {

    let ventas: number[] = new Array(5);
    for (let i: number = 0; i < 3; i++) {
        ventas = [ven1[i], ven2[i], ven3[i], ven4[i], ven5[i]]
        console.log('el peor vendedor del mes ' + i + ' fue: ', vendedor[ventaMinima(ventas) - 1], 'con ' + ventas[ventaMinima(ventas) - 1]);
    }
}

/**
 * suma todas las ventas del trimestre
 * @param ventas 
 * @returns 
 */
function ventaTrimestre(ventas: number[]): number {
    let trimestre: number = 0;
    for (let i = 0; i < ventas.length; i++) {
        trimestre += ventas[i];
    }
    return trimestre;
}


/**
 * Peor vendedor del trimestre
 * @param ven1 
 * @param ven2 
 * @param ven3 
 * @param ven4 
 * @param ven5 
 * @param vendedor 
 */
function peorVendedorTrimestre(ven1: number, ven2: number, ven3: number, ven4: number, ven5: number, vendedor: string[]) {
    let ventas: number[] = [ven1, ven2, ven3, ven4, ven5]
    console.log('el peor vendedor del trimestre fue: ', vendedor[ventaMinima(ventas) - 1], 'con ' + ventas[ventaMinima(ventas) - 1]);
}


/**
 * Pide al usuario un vendedor y muestra menta maxima, venta minima, promedio semanal y mensual de ventas
 * @param ven1 
 * @param ven2 
 * @param ven3 
 * @param ven4 
 * @param ven5 
 * @param vendedor 
 */
function ventasDe(ven1: number[], ven2: number[], ven3: number[], ven4: number[], ven5: number[], vendedor: string[]) {
    console.log('vendedores disponibles', vendedor);
    let vende: number = rls.questionInt('ingrece poscicion (0 a ' + (vendedor.length - 1) + ' ) del vendedor para verificar sus ventas: ');
    //console.log('entro')
    switch (true) {
        case (vende == 0): {
            console.log('venta maxima de ' + vendedor[vende] + ' fue en la semana: ', ventaMaxima(ven1), ' y fue en el mes: ', busquedaMes(ventaMaxima(ven1)));
            console.log('venta minima de ' + vendedor[vende] + ' fue en la semana: ', ventaMinima(ven1), ' y fue en el mes: ', busquedaMes(ventaMinima(ven1)));
            console.log('promedio semana : ', promedioSemanal(ven1), ' y prom mensual: ', promedioMensual(ven1));
            break;
        }
        case (vende == 1): {
            console.log('venta maxima de ' + vendedor[vende] + ' fue en la semana: ', ventaMaxima(ven2), ' y fue en el mes: ', busquedaMes(ventaMaxima(ven2)));
            console.log('venta minima de ' + vendedor[vende] + ' fue en la semana: ', ventaMinima(ven2), ' y fue en el mes: ', busquedaMes(ventaMinima(ven2)));
            console.log('promedio semana : ', promedioSemanal(ven2), ' y prom mensual: ', promedioMensual(ven2));
            break;
        }
        case (vende == 2): {
            console.log('venta maxima de ' + vendedor[vende] + ' fue en la semana: ', ventaMaxima(ven3), ' y fue en el mes: ', busquedaMes(ventaMaxima(ven3)));
            console.log('venta minima de ' + vendedor[vende] + ' fue en la semana: ', ventaMinima(ven3), ' y fue en el mes: ', busquedaMes(ventaMinima(ven3)));
            console.log('promedio semana : ', promedioSemanal(ven3), ' y prom mensual: ', promedioMensual(ven3));
            break;
        }
        case (vende == 3): {
            console.log('venta maxima de ' + vendedor[vende] + ' fue en la semana: ', ventaMaxima(ven4), ' y fue en el mes: ', busquedaMes(ventaMaxima(ven4)));
            console.log('venta minima de ' + vendedor[vende] + ' fue en la semana: ', ventaMinima(ven4), ' y fue en el mes: ', busquedaMes(ventaMinima(ven4)));
            console.log('promedio semana : ', promedioSemanal(ven4), ' y prom mensual: ', promedioMensual(ven4));
            break;
        }
        case (vende == 4): {
            console.log('venta maxima de ' + vendedor[vende] + ' fue en la semana: ', ventaMaxima(ven5), ' y fue en el mes: ', busquedaMes(ventaMaxima(ven5)));
            console.log('venta minima de ' + vendedor[vende] + ' fue en la semana: ', ventaMinima(ven5), ' y fue en el mes: ', busquedaMes(ventaMinima(ven5)));
            console.log('promedio semana : ', promedioSemanal(ven5), ' y prom mensual: ', promedioMensual(ven5));
            break;
        }
        default:
            break;
    }


}







let vendedores: string[] = ['Camila', 'Franco', 'Sofia', 'Matias', 'Agustina'];

let vendedor1: number[] = [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 39652];
let vendedor2: number[] = [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855];
let vendedor3: number[] = [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218];
let vendedor4: number[] = [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006];
let vendedor5: number[] = [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562];



mejorVendedorSem(vendedor1, vendedor2, vendedor3, vendedor4, vendedor5, vendedores);
mejorVendedorMes(ventaMensual(vendedor1), ventaMensual(vendedor2), ventaMensual(vendedor3), ventaMensual(vendedor4), ventaMensual(vendedor5), vendedores)
peorVendedorMes(ventaMensual(vendedor1), ventaMensual(vendedor2), ventaMensual(vendedor3), ventaMensual(vendedor4), ventaMensual(vendedor5), vendedores)
peorVendedorTrimestre(ventaTrimestre(vendedor1), ventaTrimestre(vendedor2), ventaTrimestre(vendedor3), ventaTrimestre(vendedor4), ventaTrimestre(vendedor5), vendedores)

ventasDe(vendedor1, vendedor2, vendedor3, vendedor4, vendedor5, vendedores)



//probar
/* function ventasDe(ven1: number[], ven2: number[], ven3: number[], ven4: number[], ven5: number[], vendedor: string[]){
    console.log('vendedores disponibles', vendedor);
    
    let vende:number=rls.questionInt('ingrece poscicion del vendedor para verificar sus ventas: ')
    
    console.log('venta maxima de '+vendedor[vende]+' fue en la semana: ', ventaMaxima(eval('ven'+(vende+1))), ' y fue en el mes: ', busquedaMes(ventaMaxima(eval('ven'+(vende+1)))))
    console.log('venta minima de '+vendedor[vende]+' fue en la semana: ', ventaMinima(eval('ven'+(vende+1))), ' y fue en el mes: ', busquedaMes(ventaMinima(eval('ven'+(vende+1)))))
    console.log('promedio semana : ', promedioSemanal(eval('ven'+(vende+1))), ' y prom mensual: ', promedioMensual(eval('ven'+(vende+1))))
}
 */