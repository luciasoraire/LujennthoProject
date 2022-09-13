export function validarNombre(input) {
  if (input.value.trim().length >= 4 && input.value.trim().length <= 30) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}
export function validarDescripcion(input) {
  if (input.value.trim().length >= 5 && input.value.trim().length <= 80) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validarImagen(input) {
  let expReg = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  if (expReg.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validarCategoria(input) {
  let Categoria = document.querySelector("#categoria");
  let valorCategoria = Categoria.value;
  if (valorCategoria) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validarPrecio(input) {
  let expReg = /^[\d]{1,6}$/;
  if (expReg.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}
export function validarStock(input) {
  let expReg = /^[\d]{1,7}$/;
  if (expReg.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validarNombreUsuario(input){
  if (input.value.trim().length >=2 && input.value.trim().length <=40){
      input.className = 'form-control is-valid'
      return true
  } else {
    input.className ='form-control is-invalid'
    return false
  }
}

export function validarContrasenia(input){
  let expReg = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
  if (expReg.test(input.value)){
    input.className = 'form-control is-valid'
    return true;
  }else{
    input.className = 'form-control is-invalid'
    return false;
  }
}

export function validarEmail(input){
  let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  if (expReg.test(input.value)){
    input.className = 'form-control is-valid'
    return true
  }else{
    input.className = 'form-control is-invalid'
  }
}
