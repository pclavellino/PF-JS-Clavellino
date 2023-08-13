import usuariosRegistrados from "./baseDatosUsuarios.js";

const sesionIniciada = JSON.parse(localStorage.getItem("Usuario"));
const primeraFila = document.getElementById("primeraFila");
const segundaFila = document.getElementById("segundaFila");
const nombreUsuario = document.getElementById("nombreUsuario");

if (sesionIniciada) {
    primeraFila.classList.add("ocultar");
    segundaFila.classList.remove("ocultar");
    nombreUsuario.innerHTML = 'Bienvenido ' + sesionIniciada.nombre; 
}

function iniciarSesion() {
    const mail = document.getElementById("loginMail");
    const contraseña = document.getElementById("loginContraseña");

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
            localStorage.setItem("Usuario", JSON.stringify(usuarioEncontrado));
            primeraFila.classList.add("ocultar");
            segundaFila.classList.remove("ocultar"); 
            nombreUsuario.innerHTML = 'Bienvenido ' + usuarioEncontrado.nombre;            
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Usuario no encontrado. Revise los datos ingresados e intente nuevamente',
            })
        }
    }
}

document.getElementById("botonIniciarSesion").addEventListener("click", iniciarSesion);



