import usuariosRegistrados from "./usuarios.js";

function registrarUsuario() {

    let nombre = document.getElementById("regNombre");
    let mail = document.getElementById("regMail");
    let contraseña = document.getElementById("regContraseña");

    function Usuario(nombre, mail, contraseña) {
        this.nombre = nombre.value;
        this.mail = mail.value;
        this.contraseña = contraseña.value;
    }

    if (nombre.value == "" || mail.value == "" || contraseña.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Todos los campos son necesarios. Revise los datos e intente nuevamente',
        })
    } else {
        let nuevoUsuario = new Usuario(nombre, mail, contraseña);
        usuariosRegistrados.push(nuevoUsuario);
        Swal.fire({
            icon: 'success',
            title: 'Usuario registrado con exito',
        })  
    }
    
    console.log(usuariosRegistrados)

}

document.getElementById("registrarse").addEventListener("click", registrarUsuario);


