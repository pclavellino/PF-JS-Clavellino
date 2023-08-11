import usuariosRegistrados from "./usuarios.js";


function iniciarSesion() {
    let mail = document.getElementById("loginMail");
    let contraseña = document.getElementById("loginContraseña");

    if (mail.value == "" || contraseña.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Todos los campos son necesarios. Revise los datos e intente nuevamente',
        })
    } else {
        const usuarioEncontrado = usuariosRegistrados.find( (registro) => mail.value === registro.mail && contraseña.value === registro.contraseña )
        if(usuarioEncontrado) {
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sesión exitoso',
                text: 'Bienvenido ' + usuarioEncontrado.nombre,
            })
            localStorage.setItem("Usuario", JSON.stringify(userFind));
        }
    }
}

document.getElementById("iniciarSesion").addEventListener("click", iniciarSesion);

