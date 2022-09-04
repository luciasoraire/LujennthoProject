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
  let expReg = /^[\d]{1,10}$/;
  if (expReg.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}
