function cerrarSesion() {
    localStorage.clear();
    Swal.fire({
        icon: 'success',
        title: 'Sesión cerrada exitosamente',
    })
    primeraFila.classList.remove("ocultar");
    segundaFila.classList.add("ocultar"); 
}

document.getElementById("botonCerrarSesion").addEventListener("click", cerrarSesion);