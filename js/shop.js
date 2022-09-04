let listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];

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
