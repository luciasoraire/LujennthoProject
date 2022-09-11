import { Producto } from "./classProducto.js";
import {
  validarDescripcion,
  validarNombre,
  validarStock,
  validarCategoria,
  validarImagen,
  validarPrecio,
} from "./helpers.js";

let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuariosKey")) || [];

for (let i = 0; i < listaUsuarios.length; i++) {
  if (
    listaUsuarios[i].nombre != "Administrador" ||
    listaUsuarios[i].contrasenia != "Lujenntho1" ||
    listaUsuarios[i].email != "administrador@lujenntho.com"
  ) {
    window.setTimeout(redirecicionar, 3000)
  }
}

for (let i = 0; i < listaUsuarios.length; i++) {
  if (
    listaUsuarios[i].nombre === "Administrador" &&
    listaUsuarios[i].contrasenia === "Lujenntho1" &&
    listaUsuarios[i].email === "administrador@lujenntho.com"
  ) {
    let navAdmin = document.querySelector("#navAdmin");
    let etiquetaAdmin = `<a href="admin.html" class="nav-link">Administrador</a>`;
    navAdmin.innerHTML = etiquetaAdmin;
  }
}

let formAdmin = document.querySelector("#formAdmin");
let codigo = document.querySelector("#codigo");
let nombre = document.querySelector("#nombre");
let descripcion = document.querySelector("#descripcion");
let imagen = document.querySelector("#imagen");
let imagenSecundaria = document.querySelector("#imagenSecundaria");
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
imagenSecundaria.addEventListener("blur", () => {
  validarImagen(imagenSecundaria);
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
    validarImagen(imagenSecundaria) &&
    validarCategoria(categoria) &&
    validarPrecio(precio) &&
    validarStock(stock)
  ) {
    generarProducto();
  }else{
    actualizarProducto()
  }
}

function generarProducto() {
  const nuevoProducto = new Producto(
    codigo.value,
    nombre.value,
    descripcion.value,
    imagen.value,
    imagenSecundaria.value,
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
    <th class="productosTabla" scope="row">${producto.codigo}</th>
    <td class="productosTabla">${producto.nombre}</td>
    <td class="productosTabla">
      <p class="cortarText">
        ${producto.descripcion}
      </p>
    </td>
    <td class="productosTabla">
      <p class="cortarText">
        ${producto.imagen}
      </p>
    </td>
    <td class="productosTabla">
    <p class="cortarText">
      ${producto.imagenSecundaria}
    </p>
  </td>
    <td class="productosTabla">${producto.categoria}</td>
    <td class="productosTabla">${producto.precio}</td>
    <td class="productosTabla">${producto.stock}</td>
    <td class="productosTabla">
      <button class="btn btn-outline-light mb-2" onclick="editarProducto('${producto.codigo}')">
        <i class="bi bi-pencil-square"></i></button
      ><button class="btn btn-outline-light" onclick="borrarProducto('${producto.codigo}')">
        <i class="bi bi-trash"></i>
      </button>
    </td>
  </tr>`;
}

function mostrarFormulario() {
  productoNuevo = true;

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

window.editarProducto = function (codigoProducto) {
  productoNuevo = false;
  modalFormProducto.show();
  let productoBuscado = listaProductos.find(
    (producto) => producto.codigo === codigoProducto
  );
  codigo.value = productoBuscado.codigo;
  nombre.value = productoBuscado.nombre;
  descripcion.value = productoBuscado.descripcion;
  imagen.value = productoBuscado.imagen;
  imagenSecundaria.value = productoBuscado.imagenSecundaria;
  categoria.value = productoBuscado.categoria;
  precio.value = productoBuscado.precio;
  stock.value = productoBuscado.stock;
};

function actualizarProducto(){
    let posicionProducto = listaProductos.findIndex((producto)=>producto.codigo === codigo.value)
    listaProductos[posicionProducto].nombre = nombre.value
    listaProductos[posicionProducto].descripcion = descripcion.value
    listaProductos[posicionProducto].imagen = imagen.value
    listaProductos[posicionProducto].imagenSecundaria = imagenSecundaria.value
    listaProductos[posicionProducto].categoria = categoria.value
    listaProductos[posicionProducto].precio = precio.value
    listaProductos[posicionProducto].stock = stock.value

    guardarDatosEnLS()
    actualizarTabla()
    modalFormProducto.hide()
    limpiarFormulario()
}

cargaUsuario()

function cargaUsuario() {
  if (listaUsuarios.length > 0) {
    listaUsuarios.map((usuario) => hacerFilaUsuario(usuario));
  }
}

function hacerFilaUsuario(usuario) {
  let tablaUsuario = document.querySelector("#tablaUsuario");
  tablaUsuario.innerHTML += `<tr>
    <th class="productosTabla" scope="row">${usuario.nombre}</th>
    <td class="productosTabla">${usuario.email}</td>
    <td class="productosTabla">
        ${usuario.contrasenia}
    </td>
    <td class="productosTabla">
      <button class="btn btn-outline-light" onclick="borrarUsuario('${usuario.nombre}')">
        <i class="bi bi-trash"></i>
      </button>
    </td>
  </tr>`;
}
function guardarDatosUsuarioEnLS() {
  localStorage.setItem("listaUsuariosKey", JSON.stringify(listaUsuarios));
}
window.borrarUsuario = function (nombre) {
  let copiaUsuario = listaUsuarios.filter(
    (usuario) => usuario.nombre != nombre
  );
  listaUsuarios = copiaUsuario;
  guardarDatosUsuarioEnLS();
  actualizarTablaUsuario();
  redirecicionar()
};

function actualizarTablaUsuario() {
  let tablaUsuario = document.querySelector("#tablaUsuario");
  tablaUsuario.innerHTML = "";
  cargaUsuario();
}

function redirecicionar() {
  window.location.href =
    window.location.origin + "/index.html";
}