// funcionalidad login
import { validarNombre, validarContrasenia, validarEmail } from "./classProducto.js";

const modalFormLogin = new bootstrap.Modal(document.querySelector('#modalLogin'))

function mostrarModal(){
    modalFormLogin.show();    
    limpiarModal();
}

const btnLogin =document.querySelector('#btnModal')
let formulario = document.querySelector('#formLogin')
let nombre = document.querySelector('#nombre')
let email = document.querySelector('#email')
let contrasenia = document.querySelector('#contraseña')

btnLogin.addEventListener('click', mostrarModal);
formulario.addEventListener('submit', crearUsuario);
nombre.addEventListener('blur', ()=>{validarNombre(nombre)})
email.addEventListener('blur', ()=>{validarEmail(email)})
contrasenia.addEventListener('blur', ()=>{validarContrasenia(contrasenia)})

function crearUsuario(e){
    e.preventDefault();
  
}

function limpiarModal(){
    formulario.reset();
    nombre.className = 'form-control'
    email.className = 'form-control'
    contrasenia.className = 'form-control'
}











