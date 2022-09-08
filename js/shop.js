let listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];

let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuariosKey")) || [];

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

listaProductos.map((producto) => {
  hacerGrilla(producto);
});

function hacerGrilla(producto) {
  let grilla = document.querySelector("#grilla");
  grilla.innerHTML += `<aside class="col-sm-12 col-md-4 col-lg-3">
    <div class="text-center">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body text-center">
          <h5 class="card-title mb-3">${producto.nombre}</h5>
          <button class="btn btnAzulOscuro" onclick="detalleProducto('${producto.codigo}')">Detalle</button>
        </div>
      </div>
</aside>`;
}

function detalleProducto(codigo) {
  window.location.href =
    window.location.origin + "/pages/detalle.html?codigo=" + codigo;
}

const modalFiltro = new bootstrap.Modal(document.querySelector("#modalFiltro"));
let btnFiltrar = document.querySelector("#btnFiltrar");
let formFiltro = document.querySelector("#formFiltro");
let categoria = document.querySelector("#categoria");

btnFiltrar.addEventListener("click", mostrarOpciones);

formFiltro.addEventListener("submit", hacerFiltro);

function mostrarOpciones() {
  modalFiltro.show();
  limpiarFormulario();
  listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || []
}

function hacerFiltro(e) {
  e.preventDefault();
  let copiaFiltro = listaProductos.filter(
    (producto) => producto.categoria == categoria.value
  );
  console.log(copiaFiltro);
  listaProductos = copiaFiltro;
  console.log(listaProductos);
  let filtrado = document.querySelector("#filtrado");
  let botonOcultar = document.querySelector("#botonOcultar");
  botonOcultar.innerHTML = `<button class="mb-2"
  type="button"
  id="ocultar"
  onclick="ocultar()"
>
  Ocultar
</button>`;
  window.ocultar = function () {
    filtrado.removeChild(filtrado.children[0]);
  };
  for (let i = 0; i < listaProductos.length; i++) {
    let parrafoFiltro = document.createElement("p");
    parrafoFiltro.innerHTML = `<aside>
    <div class="text-center">
        <img src="${listaProductos[i].imagen}" class="card-img-top w-25" alt="${listaProductos[i].nombre}">
        <div class="card-body text-center">
          <h5 class="card-title mb-3">${listaProductos[i].nombre}</h5>
          <button class="btn btnAzulOscuro" onclick="detalleProducto('${listaProductos[i].codigo}')">Detalle</button>
        </div>
      </div>
</aside>`;
    filtrado.prepend(parrafoFiltro);
    modalFiltro.hide();
  }
}

function limpiarFormulario() {
  formFiltro.reset();
  let selectCategoria = document.querySelector("#categoria");
  selectCategoria.className = "form-control";
}

window.ocultar = function () {
  filtrado.removeChild(filtrado.children[0]);
};
