
const equiposAReparar = [
    {
        nOrden : "000001",
        nombreCliente: "Pedro Perez",
        tipoDeEquipo : "PC",
        marca: "No Posee",
        estado : "Pendiente de Diagnostico",
        diagnostico : "Pendiente",
        valorReparacion : "Pendiente",
    }, 
    {
        nOrden : "000002",
        nombreCliente: "Maria Laura Martinez",
        tipoDeEquipo : "Notebook",
        marca: "Lenovo",
        estado : "Diagnosticado",
        diagnostico : "Pantalla defectuosa. Debe cambiarse el Display",
        valorReparacion : "$ 30000",
    }, 
    {
        nOrden : "000003",
        nombreCliente: "Claudio Roldan",
        tipoDeEquipo : "Impresora",
        marca: "Epson",
        estado : "Diagnosticado",
        diagnostico : "Rodillos gastados. Deben cambiarse los rodillos del mecanismo de carga de papel",
        valorReparacion : "$ 25000",
    }, 
    {
        nOrden : "000004",
        nombreCliente: "Analia Lopez",
        tipoDeEquipo : "Impresora",
        marca : "HP",
        estado : "Pendiente de Diagnostico",
        diagnostico : "Pendiente",
        valorReparacion : "Pendiente",
    }, 
    {
        nOrden : "000005",
        nombreCliente: "Camila Alvarez",
        tipoDeEquipo : "PC",
        marca : "No Posee",
        estado : "Finalizado",
        diagnostico : "Falla de Sistema Operativo. Debe reinstalarse",
        valorReparacion : "$ 5000",
    }
]

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


let botonConsultar = document.getElementById("botonConsultar");
let ordenServicio = document.getElementById("ordenServicio");

botonConsultar.addEventListener("click", consultarReparacion);

ordenServicio.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        botonConsultar.click();
    }
})

