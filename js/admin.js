import { Producto } from "./classProducto.js";

let formAdmin = document.querySelector("#formAdmin");
let codigo = document.querySelector("#codigo");
let nombre = document.querySelector("#nombre");
let descripcion = document.querySelector("#descripcion");
let imagen = document.querySelector("#imagen");
let categoria = document.querySelector("#categoria");
let precio = document.querySelector("#precio");
let stock = document.querySelector("#stock");
let listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];
const modalFormProducto = new bootstrap.Modal(
  document.querySelector("#modalProducto")
);
const btnCrearProducto = document.querySelector("#btnCrearProducto");
let productoNuevo = true;

btnCrearProducto.addEventListener("click", mostrarFormulario);

formAdmin.addEventListener("submit", crearProducto);


function mostrarFormulario() {
  productoNuevo = true;
  // limpiar el formulario

  modalFormProducto.show();
  codigo.value = uuidv4();
}

function crearProducto(e) {
  e.preventDefault();
  generarProducto();
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
  listaProductos.push(nuevoProducto)
  console.log(listaProductos)
}
