/*EL PROYECTO ES UN E-COMMERCE DEL SECTOR GASTRONÓMICO */

const comidas = [
    { id: 1, nombre: "Hamburguesa", precio: 4500 },
    { id: 2, nombre: "Pizza", precio: 3500 },
    { id: 3, nombre: "Lomito", precio: 4800 },
    { id: 4, nombre: "Papas", precio: 2800 },
    { id: 5, nombre: "No se que comer, decide por mi", precio: " ?" },
]

const bebidas = [
    { id: 1, nombre: "Gaseosa", precio: 1000 },
    { id: 2, nombre: "Cerveza", precio: 1800 },
    { id: 3, nombre: "Fernet", precio: 2500 },
    { id: 4, nombre: "Agua", precio: 800 },
    { id: 5, nombre: "No se que tomar, decide por mi", precio: " ?" },
]

let pedidos = [];
let msj;
let totalDeTodosLosPedidos = 0;

do {
    let SeleccionComida = Number(prompt("Bienvenidos a La Hamburguesería, seleccione la opción de lo que quiere comer:\n" + mostrarOpciones(comidas)));

    let SeleccionBebida = Number(prompt("Seleccione lo que desee tomar:\n" + mostrarOpciones(bebidas)));

    if (SeleccionComida === 5) {
        SeleccionComida = Math.floor(Math.random() * 4) + 1;
    }

    if (SeleccionBebida === 5) {
        SeleccionBebida = Math.floor(Math.random() * 4) + 1;
    }

    const mostrarSeleccion = (item, tipo) => {
        if (item) {
            return `
            ${tipo}
            ${item.nombre} $ ${item.precio}`;
        } else {
            return `No se ha encontrado ${tipo.toLowerCase()}`;
        }
    };

    let mensajeComida = mostrarSeleccion(comidas.find(item => item.id === SeleccionComida), "Para comer");
    let mensajeBebida = mostrarSeleccion(bebidas.find(item => item.id === SeleccionBebida), "Para tomar");

    alert(`${mensajeComida}\n${mensajeBebida}`);

    // Agregar los detalles de este pedido a la matriz de pedidos
    pedidos.push({
        comida: comidas.find(item => item.id === SeleccionComida),
        bebida: bebidas.find(item => item.id === SeleccionBebida)
    });

    msj = prompt("Desea hacer otro pedido? si/no").toLowerCase()
} while (msj === "si")

// Mostrar el resumen de todos los pedidos
for (let i = 0; i < pedidos.length; i++) {
    const pedido = pedidos[i];
    const totalPedido = (pedido.comida.precio + pedido.bebida.precio);

    alert(`Pedido ${i + 1}:
    Comida: ${pedido.comida.nombre} $${pedido.comida.precio}
    Bebida: ${pedido.bebida.nombre} $${pedido.bebida.precio}
    Total del pedido: $${totalPedido}`);
}

for (let i = 0; i < pedidos.length; i++) {
    const pedido = pedidos[i];
    const totalPedido = pedido.comida.precio + pedido.bebida.precio;

    totalDeTodosLosPedidos += totalPedido;
}

alert(`Total de todos los pedidos: $${totalDeTodosLosPedidos}`);

function mostrarOpciones(arreglo) {
    let opciones = "";
    for (let i = 0; i < arreglo.length; i++) {
        opciones += `${i + 1}. ${arreglo[i].nombre} $${arreglo[i].precio}\n`;
    }
    return opciones;
}




