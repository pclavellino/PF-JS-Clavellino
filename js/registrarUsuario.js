import usuariosRegistrados from "./baseDatosUsuarios.js";

function Usuario(nombre, mail, contraseña) {
    this.nombre = nombre.value;
    this.mail = mail.value;
    this.contraseña = contraseña.value;
}

function registrarUsuario() {

    const nombre = document.getElementById("regNombre");
    const mail = document.getElementById("regMail");
    const contraseña = document.getElementById("regContraseña");

    if (nombre.value == "" || mail.value == "" || contraseña.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Todos los campos son necesarios. Revise los datos e intente nuevamente',
        })
    } else {
        const nuevoUsuario = new Usuario(nombre, mail, contraseña);
        usuariosRegistrados.push(nuevoUsuario);
        Swal.fire({
            icon: 'success',
            title: 'Usuario registrado con exito',
        })  
    }
}

document.getElementById("registrarse").addEventListener("click", registrarUsuario);


