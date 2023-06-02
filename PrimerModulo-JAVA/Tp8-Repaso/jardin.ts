import * as rls from 'readline-sync';

let cantAlumnos: number = rls.questionInt("Ingrese la cantidad de alumnos de su curso: ");

function asignarAula(cantA: number): string {
    let aula: string;
    if (cantA > 40) {
        aula = "No tenemos tantos de bancos disponibles";
        return (aula);
    } else {
        if (cantA <= 30) {
            aula = "utilice el aula Amarilla";
        } else {
            if ((cantA > 30) && (cantA <= 35)) {
                aula = "utilice el aula Verde";
            } else {
                aula = "Autilice el aula Azul";
            }
        }
        return aula;
    }
}

console.log("Para la cantidad de alumnos ingresados: ", asignarAula(cantAlumnos));