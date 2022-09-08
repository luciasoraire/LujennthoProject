export class Producto {
  constructor(codigo, nombre, descripcion, imagen, imagenSecundaria, categoria, precio, stock) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.categoria = categoria;
    this.precio = precio;
    this.stock = stock;
  }
}



export function validarNombre(input){
  if (input.value.trim().length >=3 && input.value.trim().length <=50){
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

