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
          <button class="item-button addToCart" onclick="detalleProducto('${producto.codigo}')">Detalle</button>
          <button class="item-button addToCart">Añadir al carrito</button>
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
const resultado = document.querySelector('#resultado')
formFiltro.addEventListener('submit', filtrar)

function filtrar(e){
  e.preventDefault()
  listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || []
  resultado.innerHTML = ''
  let valorInput = filtro.value.toLowerCase()
  for(let producto of listaProductos){
    let nombre = producto.nombre.toLowerCase()
    if(nombre.indexOf(valorInput) !== -1){
      resultado.innerHTML += `<aside class="col-sm-12 col-md-4 col-lg-3">
      <div class="text-center">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
          <div class="card-body text-center">
            <h5 class="card-title mb-3">${producto.nombre}</h5>

            <button class="btn btnAzulOscuro" onclick="detalleProducto('${producto.codigo}')">Detalle</button>
          </div>
        </div>
  </aside>`
    }
  }
  if(resultado.innerHTML === ''){
    resultado.innerHTML += `<li class="noEncontrado">Producto no encontrado</li>`
  }
}


