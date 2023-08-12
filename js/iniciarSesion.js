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
            localStorage.setItem("Usuario", JSON.stringify(usuarioEncontrado));
            primeraFila.classList.add("ocultar");
            segundaFila.classList.remove("ocultar"); 
            saludoBienvenida.classList.remove("ocultar");
            nombreUsuario.innerHTML = 'Bienvenido ' + usuarioEncontrado.nombre;            
        }
    }
}

function cerrarSesion() {
    localStorage.clear();
    Swal.fire({
        icon: 'success',
        title: 'Sesión cerrada exitosamente',
    })
    primeraFila.classList.remove("ocultar");
    segundaFila.classList.add("ocultar"); 
    saludoBienvenida.classList.add("ocultar");

}

const sesionIniciada = JSON.parse(localStorage.getItem("Usuario"));
const primeraFila = document.getElementById("primeraFila");
const segundaFila = document.getElementById("segundaFila");
const saludoBienvenida = document.getElementById("saludoBienvenida"); 
const nombreUsuario = document.getElementById("nombreUsuario");

if (sesionIniciada) {
        primeraFila.classList.add("ocultar");
        segundaFila.classList.remove("ocultar");
}

document.getElementById("botonIniciarSesion").addEventListener("click", iniciarSesion);

document.getElementById("botonCerrarSesion").addEventListener("click", cerrarSesion)

