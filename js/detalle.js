const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removerClases();
    panel.classList.add("active");
  });
});

const removerClases = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
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

const parametroCodigo = new URLSearchParams(window.location.search);

let listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];
let productoBuscado = listaProductos.find(
  (producto) => producto.codigo === parametroCodigo.get("codigo")
);


let detalle = document.querySelector("#descripcion");
detalle.innerHTML = `<div class=" mb-4 text-center">
<div class="row g-4 mx-4">
  <div class="col-md-5">
    <img
      src="${productoBuscado.imagenSecundaria}"
      class="img-fluid rounded-start"
      alt="${productoBuscado.nombre}"
    />
  </div>
  <div class="col-md-7">
    <div>
      <h2>${productoBuscado.nombre}</h2>
      <hr>
      <div>
        Categoria:
        <span class="badge rounded-pill genero text-light"
          >${productoBuscado.categoria}</span
        >
      </div>
      <hr>
      <div>
       <p>Descripcion:</p>
        <p>${productoBuscado.descripcion}</p>
      </div>
      <hr>
      <div>
<h5>Precio: <span class="badge rounded-pill genero text-light"
>$ ${productoBuscado.precio}</span
></h5>
<h5>Stock: <span class="badge rounded-pill genero text-light"
>${productoBuscado.stock}</span
></h5>
<hr>
</div>
      <p class="card-text">
        Talle:
      </p>
      <div>
      <button type="button" class="uiverse">S</button>
      <button type="button" class="uiverse">L</button>
      <button type="button" class="uiverse">XL</button>
    </div>
    <hr>
    <div>
        <a href="error404.html"><button>COMPRAR</button></a>
      </div>
  </div>
</div>
</div>`;

