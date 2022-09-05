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
          <a href="#" class="btn btnAzulOscuro">Detalle</a>
        </div>
      </div>
</aside>`;
}
