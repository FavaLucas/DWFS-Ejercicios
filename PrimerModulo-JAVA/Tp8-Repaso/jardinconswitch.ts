import * as rls from 'readline-sync';

let cantAlumnos: number = rls.questionInt("Ingrese la cantidad de alumnos de su curso: ");
//Declaro Funcion
function evaluoAula(cantA: number): string {
    let cantidadMaxima: number = 40;
    let restoAulas: number = 0;
    let salon: string = "";
//Evaluo el resto, para saber que aula asignar    
    restoAulas = cantidadMaxima - cantA;
    if (restoAulas > 10) {
        salon = "Amarilla"
        return salon;
    } else {
        switch (restoAulas) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                salon = "Azul";
                break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                salon = "Verde";
                break;
        }
    }
    return salon;
}
//Inicio de programa
if (cantAlumnos > 40) {
    console.log("No hay salon disponible");
} else {
    console.log("El aula asignada es la: ", evaluoAula(cantAlumnos));
}
