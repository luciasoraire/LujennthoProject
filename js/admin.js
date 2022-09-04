import { Producto } from "./classProducto.js";
import {
  validarDescripcion,
  validarNombre,
  validarStock,
  validarCategoria,
  validarImagen,
  validarPrecio,
} from "./helpers.js";

let formAdmin = document.querySelector("#formAdmin");
let codigo = document.querySelector("#codigo");
let nombre = document.querySelector("#nombre");
let descripcion = document.querySelector("#descripcion");
let imagen = document.querySelector("#imagen");
let categoria = document.querySelector("#categoria");
let precio = document.querySelector("#precio");
let stock = document.querySelector("#stock");

const modalFormProducto = new bootstrap.Modal(
  document.querySelector("#modalProducto")
);
const btnCrearProducto = document.querySelector("#btnCrearProducto");
let productoNuevo = true;

nombre.addEventListener("blur", () => {
  validarNombre(nombre);
});
descripcion.addEventListener("blur", () => {
  validarDescripcion(descripcion);
});
imagen.addEventListener("blur", () => {
  validarImagen(imagen);
});
categoria.addEventListener("blur", () => {
  validarCategoria(categoria);
});
precio.addEventListener("blur", () => {
  validarPrecio(precio);
});
stock.addEventListener("blur", () => {
  validarStock(stock);
});

btnCrearProducto.addEventListener("click", mostrarFormulario);

formAdmin.addEventListener("submit", crearProducto);

function mostrarFormulario() {
  productoNuevo = true;
  // limpiar el formulario
  limpiarFormulario();
  modalFormProducto.show();
  codigo.value = uuidv4();
}

function crearProducto(e) {
  e.preventDefault();
  if (
    productoNuevo &&
    validarNombre(nombre) &&
    validarDescripcion(descripcion) &&
    validarImagen(imagen) &&
    validarCategoria(categoria) &&
    validarPrecio(precio) &&
    validarStock(stock)
  ) {
    generarProducto();
  }
}

function generarProducto() {
  const nuevoProducto = new Producto(
    codigo.value,
    nombre.value,
    descripcion.value,
    imagen.value,
    categoria.value,
    precio.value,
    stock.value
  );
  console.log(nuevoProducto);
  listaProductos.push(nuevoProducto);
  console.log(listaProductos);
  guardarDatosEnLS();
  limpiarFormulario();
}

function limpiarFormulario() {
  formAdmin.reset();
  let arrayInput = document.getElementsByTagName("input");
  let selectCategoria = document.querySelector("#categoria");
  selectCategoria.className = "form-control";
  for (let i = 0; i < arrayInput.length; i++) {
    arrayInput[i].className = "form-control";
  }
}

let listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];

function guardarDatosEnLS() {
  localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos));
}
