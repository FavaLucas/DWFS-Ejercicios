let dialog = document.getElementById('dialog');
let form = document.getElementById('form');
let cartel = document.getElementById('cartel');
let captcha = document.getElementById('say-captcha');

let btn = document.getElementById('btn-form').addEventListener('click', validar);

let caracter = 'supera los maximos caracteres';
let campovacio = 'Todos los campos son obligatorios';

let n1 = Math.floor(Math.random() * (999));
let n2 = Math.floor(Math.random() * (999));
let resultado = n1 + '-' + n2;
captcha.innerHTML = resultado;

function validar() {

    let name = document.getElementById('name');
    let surname = document.getElementById('surname');
    let email = document.getElementById('email');
    let team = document.getElementById('team');
    let opinion = document.getElementById('opinion');
    let confirmacion = document.getElementById('captcha');

    if (name.value == '' || surname.value === '' || email.value === '' || opinion.value === '' || confirmacion.value === '') {

        dialog.innerHTML = campovacio;
        dialog.classList.add('error');

        n1 = Math.floor(Math.random() * (500));
        n2 = Math.floor(Math.random() * (500));
        resultado = n1 + '-' + n2;
        captcha.innerHTML = resultado;
    } else if (name.value.length > 30) {

        dialog.innerHTML = 'El Nombre ' + caracter;
        dialog.classList.add('error');

    } else if (surname.value.length > 60) {

        dialog.innerHTML = 'El Apellido ' + caracter;
        dialog.classList.add('error');


    } else if (email.value.length > 70) {

        dialog.innerHTML = 'El Email ' + caracter;
        dialog.classList.add('error');


    } else if (team.value == '') {
        dialog.innerHTML = 'Selecciona un equipo';
        dialog.classList.add('error');

    } else if (opinion.value.length > 200) {

        dialog.innerHTML = 'La Opinion ' + caracter;
        dialog.classList.add('error');

    } else if (confirmacion.value != resultado) {

        n1 = Math.floor(Math.random() * (500));
        n2 = Math.floor(Math.random() * (500));
        resultado = n1 + '-' + n2;
        captcha.innerHTML = resultado;

        confirmacion.value = '';
        dialog.innerHTML = 'Captcha incorrecto';
        dialog.classList.add('error');

    } else {
        form.classList.add('d-none');
        cartel.classList.add('d-block');

    }

}