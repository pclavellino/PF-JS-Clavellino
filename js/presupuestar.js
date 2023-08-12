let datosIngresados = [];

function obtenerDatos() {

    datosIngresados = [
        {
            nombre: "Servidores",
            precio: 1000,
            cantidad: parseInt(document.getElementById("servidores").value),
        },
        {
            nombre: "PC",
            precio: 500,
            cantidad: parseInt(document.getElementById("pcs").value),
        },
        {
            nombre: "Impresoras",
            precio: 250,
            cantidad: parseInt(document.getElementById("impresoras").value),
        },
        {
            nombre: "Camaras de Seguridad",
            precio: 5000,
            cantidad: 0,
            incluir: document.getElementById("camarasSeguridad").checked,
        },
        {
            nombre: "Servidores",
            precio: 3000,
            cantidad: 0,
            incluir: document.getElementById("telefonia").checked,
        },

    ]

    for ( i = 0; i <= datosIngresados.length; i++) {
        if (datosIngresados[i]?.incluir) {
            datosIngresados[i].cantidad = 1;
        }
    }
        
}

function calcularPrecio() {

    const subtotales = datosIngresados.map((elemento) => { return {
        nombre: elemento.nombre,
        precioTotal: elemento.precio * elemento.cantidad,
    }});

    const precioFinal = subtotales.reduce((acumulador, servicio) => { return acumulador + servicio.precioTotal }, 0);

}

function presupuestar() {

    obtenerDatos();
    calcularPrecio();

}

document.getElementById("botonPresupuestar").addEventListener("click", presupuestar);

