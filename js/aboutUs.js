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