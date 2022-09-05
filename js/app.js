// funcionalidad login
import { validarNombre, validarContrasenia, validarEmail } from "./classProducto.js";

const modalFormLogin = new bootstrap.Modal(document.querySelector('#modalLogin'))

function mostrarModal(){
    modalFormLogin.show();    

}

const btnLogin =document.querySelector('#btnModal')
let formulario = document.querySelector('#formLogin')
let nombre = document.querySelector('#nombre')
let email = document.querySelector('#email')
let contrasenia = document.querySelector('#contraseña')

btnLogin.addEventListener('click', mostrarModal);
formulario.addEventListener('submit');




function limpiarModal(){

}











