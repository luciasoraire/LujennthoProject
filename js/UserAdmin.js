export let userAdmin = {
  nombre: "Administrador",
  email: "administrador@lujenntho.com",
  contrasenia: "Lujenntho1",
};

export class Usuario{
    constructor(nombre, email, contrasenia){
        this.nombre = nombre;
        this.email = email;
        this.contrasenia = contrasenia
    }
}
