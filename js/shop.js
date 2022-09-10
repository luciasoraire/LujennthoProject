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
          <h3 class="item-precio">$${producto.precio}</h3>
          <button onclick="detalleProducto('${producto.codigo}')">Detalle</button>
          <button onclick="añadir('${producto.codigo}')">Añadir al carrito</button>
        </div>
      </div>
</aside>`;
}

function detalleProducto(codigo) {
  window.location.href =
    window.location.origin + "/pages/detalle.html?codigo=" + codigo;
}

let formFiltro = document.querySelector("#formFiltro");
let filtro = document.querySelector("#filtro");
const resultado = document.querySelector("#resultado");
formFiltro.addEventListener("submit", filtrar);

function filtrar(e) {
  e.preventDefault();
  listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];
  resultado.innerHTML = "";
  let valorInput = filtro.value.toLowerCase();
  for (let producto of listaProductos) {
    let nombre = producto.nombre.toLowerCase();
    if (nombre.indexOf(valorInput) !== -1) {
      resultado.innerHTML += `<aside class="col-sm-12 col-md-4 col-lg-3">
      <div class="text-center">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
          <div class="card-body text-center">
            <h5 class="card-title mb-3">${producto.nombre}</h5>

            <button class="btn btnAzulOscuro" onclick="detalleProducto('${producto.codigo}')">Detalle</button>
          </div>
        </div>
  </aside>`;
    }
  }
  if (resultado.innerHTML === "") {
    resultado.innerHTML += `<li class="noEncontrado">Producto no encontrado</li>`;
  }
}

let listaCarrito = JSON.parse(localStorage.getItem("listaCarritoKey")) || [];
cargaInicial();
function guardarDatosCarritoEnLS() {
  localStorage.setItem("listaCarritoKey", JSON.stringify(listaCarrito));
}

function añadir(codigoProducto) {
  let productoBuscado = listaProductos.find(
    (producto) => producto.codigo === codigoProducto
  );
  listaCarrito.push(productoBuscado);
  guardarDatosCarritoEnLS();
  actualizarArticleCarrito();
}

function cargaInicial() {
  if (listaCarrito.length > 0) {
    listaCarrito.map((producto) => hacerCarrito(producto));
  }
}

function hacerCarrito(producto) {
  let articleCarrito = document.querySelector("#articleCarrito");
  articleCarrito.innerHTML += `<aside class="col-sm-12 col-md-4 col-lg-3-carro">
  <div class="text-center-carro">
      <img src="${producto.imagen}" class="card-img-top-carro" alt="${producto.nombre}">
      <div class="card-body text-centerCarro">
        <h5 class="card-title-carro mb-3 shoppingCartItemTitle">${producto.nombre}</h5>
        <h3 class="item-precio-carro shoppingCartItemPrice">$${producto.precio}</h3>
        <div>
        <button onclick="borrarProdCarrito('${producto.codigo}')">Borrar</button>
        </div>
      </div>
    </div>
</aside>`;
  let tituloCarrito = document.querySelector("#tituloCarrito");
  tituloCarrito.textContent = `Productos seleccionados: ${listaCarrito.length}`;
  let comprar = document.querySelector("#comprar");
  comprar.innerHTML = `<button class"botonComprarCarro">Comprar</button>`;
}
function actualizarArticleCarrito() {
  let articleCarrito = document.querySelector("#articleCarrito");
  articleCarrito.innerHTML = "";
  cargaInicial();
}
window.borrarProdCarrito = function (codigo) {
  let copiaListaCarrito = listaCarrito.filter(
    (producto) => producto.codigo != codigo
  );
  listaCarrito = copiaListaCarrito;
  guardarDatosCarritoEnLS();
  actualizarArticleCarrito();
};


