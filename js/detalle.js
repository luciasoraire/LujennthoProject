const panels = document.querySelectorAll(".panel");

panels.forEach((panel)=> {
    panel.addEventListener("click", ()=> {
        removerClases();
        panel.classList.add("active");
    });
});

const removerClases = () => {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
};

// obtener el parametro de la url
console.log(window.location.search)

const parametroCodigo = new URLSearchParams(window.location.search);
console.log(parametroCodigo.get('codigo'))

let listaProductos = JSON.parse(localStorage.getItem('listaProductosKey')) || []
let productoBuscado = listaProductos.find((producto)=> producto.codigo === parametroCodigo.get('codigo'))


// dibujar la card
let detalle = document.querySelector('#descripcion')
detalle.innerHTML = `<div class=" mb-4 text-center">
<div class="row g-4 mx-4">
  <div class="col-md-4">
    <img
      src="${productoBuscado.imagen}"
      class="img-fluid rounded-start"
      alt="${productoBuscado.nombre}"
    />
  </div>
  <div class="col-md-8">
    <div>
      <h5></h5>
      <p></p>
      <p>
        Genero:
        <span class="badge rounded-pill genero text-light"
          >${productoBuscado.genero}</span
        >
      </p>
      <hr>
      <p>
        Material:
        <p>${productoBuscado.descripcion}</p>
      </p>
      <hr>
      <p class="card-text">
        Talle:
      </p>
      <p>
      <button type="button" class="uiverse">S</button>
      <button type="button" class="uiverse">L</button>
      <button type="button" class="uiverse">XL</button>
    </p>
      <p class="card-text">
        <small class="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
</div>
</div>`