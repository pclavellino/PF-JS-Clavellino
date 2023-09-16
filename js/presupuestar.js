let datosIngresados = [];

// ---------------------------Obtención de Datos------------------------------//

function obtenerDatos() {

    datosIngresados = [
        {
            id: "servidor",
            nombre: "Servidores",
            imagen: "../images/servidor.png",
            precio: 2000,
            cantidad: parseInt(document.getElementById("servidores").value),
        },
        {
            id: "pc",
            nombre: "PC",
            imagen: "../images/pc.png",
            precio: 1000,
            cantidad: parseInt(document.getElementById("pcs").value),
        },
        {   
            id: "impresora",
            nombre: "Impresoras",
            imagen: "../images/impresora.png",
            precio: 500,
            cantidad: parseInt(document.getElementById("impresoras").value),
        },
        {   
            id: "camaraSeguridad",
            nombre: "Servicio de Mantenimiento de Cámaras de Seguridad (max 1)",
            imagen: "../images/camara.png",
            precio: 10000,
            cantidad: 0,
            incluir: document.getElementById("camarasSeguridad").checked,
        },
        {   
            id: "tel",
            nombre: "Servicio de Mantenimiento de Red de Telefonía (max 1)",
            imagen: "../images/telefono.png",
            precio: 5000,
            cantidad: 0,
            incluir: document.getElementById("telefonia").checked,
        },
    ]
    
    for (const dato of datosIngresados) {
        dato.cantidad = dato.incluir ? 1 : dato.cantidad;
    } 
    
}

//-----------------------------Calculo de Precio-----------------------------//

function calcularPrecio() {

    const subtotales = datosIngresados.map((elemento) => { return {
        nombre: elemento.nombre,
        subtotal: elemento.precio * elemento.cantidad,
    }});

    return subtotales.reduce((acumulador, servicio) => { return acumulador + servicio.subtotal }, 0);

}

//--------------------------Muestra de Presupuesto---------------------------//

function armarPresupuesto(datosIngresados) {
    const presupuestoAbono = document.getElementById("presupuestoAbono");
    const precioTotal = document.getElementById("precioTotal");

    for (i = 0; i < datosIngresados.length; i++) {
        presupuestoAbono.innerHTML += `
            <div class=item>
                <img src="${datosIngresados[i].imagen}"/>
                <h6>${datosIngresados[i].nombre}: </h6>
                <input class="itemValues" id="${datosIngresados[i].id}" min=0 max="${datosIngresados[i].id === "camaraSeguridad" || datosIngresados[i].id === "tel" ? 1 : ""}"type=number value="${datosIngresados[i].cantidad}"/>
            </div>`
    }   

    let inputs = document.getElementsByClassName("itemValues");
    for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("input", () => {
            let nuevoValor = inputs[i].value;
            datosIngresados[i].cantidad = nuevoValor;
            precioFinal = calcularPrecio(datosIngresados);
            precioTotal.innerHTML = `$ ${precioFinal} /mes`
        })
    }

};

function presupuestar() {
    obtenerDatos();
    armarPresupuesto(datosIngresados);
    let precioFinal = calcularPrecio(datosIngresados)
    precioTotal.innerHTML = `$ ${precioFinal}`
}

let precioFinal = 0;

document.getElementById("botonPresupuestar").addEventListener("click", presupuestar);
document.getElementById("botonAceptarPresupuesto").addEventListener("click", () => {
    document.getElementById("presupuestoAbono").innerHTML = "";
})

