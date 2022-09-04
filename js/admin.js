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
let productoNuevo = true;

const modalFormProducto = new bootstrap.Modal(
  document.querySelector("#modalProducto")
);
const btnCrearProducto = document.querySelector("#btnCrearProducto");

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
  hacerFila(nuevoProducto);
  modalFormProducto.hide();
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

cargaInicial();

function cargaInicial() {
  if (listaProductos.length > 0) {
    listaProductos.map((producto) => hacerFila(producto));
  }
}

function hacerFila(producto) {
  let tablaProducto = document.querySelector("#tablaProducto");
  tablaProducto.innerHTML += `<tr>
    <th scope="row">${producto.codigo}</th>
    <td>${producto.nombre}</td>
    <td>
      <p class="cortarText">
        ${producto.descripcion}
      </p>
    </td>
    <td>
      <p class="cortarText">
        ${producto.imagen}
      </p>
    </td>
    <td>${producto.categoria}</td>
    <td>${producto.precio}</td>
    <td>${producto.stock}</td>
    <td>
      <button class="btn btn-outline-light mb-2">
        <i class="bi bi-pencil-square"></i></button
      ><button class="btn btn-outline-light" onclick="borrarProducto('${producto.codigo}')">
        <i class="bi bi-trash"></i>
      </button>
    </td>
  </tr>`;
}

function mostrarFormulario() {
  productoNuevo = true;
  // limpiar el formulario
  limpiarFormulario();
  modalFormProducto.show();
  codigo.value = uuidv4();
}


function guardarDatosEnLS() {
  localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos));
}

window.borrarProducto = function (codigo) {
  Swal.fire({
    title: "Eliminar producto",
    text: "Esta por eliminar el producto seleccionado. ¿Está seguro?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      let copiaListaProductos = listaProductos.filter(
        (producto) => producto.codigo != codigo
      );
      listaProductos = copiaListaProductos;
      guardarDatosEnLS();
      actualizarTabla();
      Swal.fire(
        "Producto eliminado!",
        "El producto fue elimando exitosamente",
        "success"
      );
    }
  });
};

function actualizarTabla() {
  let tablaProducto = document.querySelector("#tablaProducto");
  tablaProducto.innerHTML = "";
  cargaInicial();
}
