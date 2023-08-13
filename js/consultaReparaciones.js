import equiposAReparar from "./baseDatosReparaciones.js";

const botonConsultar = document.getElementById("botonConsultar");
const ordenServicio = document.getElementById("ordenServicio");

function consultarReparacion() {
    let nOrdenServicio = ordenServicio.value;
    const existeOrden = equiposAReparar.find((registro) => nOrdenServicio === registro.nOrden )
    const estadoReparacion = document.getElementById("estadoReparacion");

    if (existeOrden == undefined) {
        estadoReparacion.innerHTML = 
        `
        <p> No se encontraron registros. Verifique su numero de orden e intente nuevamente. </p>        
        `
    } else {
        estadoReparacion.innerHTML = 
        `
        <ul>
            <li>Numero de Orden: ${existeOrden.nOrden}</li>
            <li>Cliente: ${existeOrden.nombreCliente}</li>
            <li>Tipo de Equipo: ${existeOrden.tipoDeEquipo} </li>
            <li>Marca: ${existeOrden.marca}</li>
            <li>Estado: ${existeOrden.estado}</li>
            <li>Diagnostico: ${existeOrden.diagnostico}</li>
            <li>Precio: ${existeOrden.valorReparacion}</li>
        </ul>
        `
    }
}

botonConsultar.addEventListener("click", consultarReparacion);

ordenServicio.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        botonConsultar.click();
    }
})

