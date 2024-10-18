const productos = {
    robux: [
        { id: 1, nombre: '$29.9 K Robux', precio: 400, imagen: '/img/Robux.jpeg' },
        { id: 2, nombre: '$59.9 K Robux', precio: 800, imagen: '/img/Robux.jpeg' },
        { id: 3, nombre: '$114.9 K Robux', precio: 1700, imagen: '/img/Robux.jpeg' }
    ],
    pubgUC: [
        { id: 4, nombre: '30 UC', precio: 2000, imagen: '/img/PUBGUC.png' },
        { id: 5, nombre: '60 UC', precio: 4000, imagen: '/img/PUBGUC.png' },
        { id: 6, nombre: '300 + 25 UC + 8%', precio: 20000, imagen: '/img/PUBGUC.png' },
        { id: 7, nombre: '600 + 60 UC + 10%', precio: 40000, imagen: '/img/PUBGUC.png' },
        { id: 8, nombre: '1500 + 300 UC + 20%', precio: 100000, imagen: '/img/PUBGUC.png' },
        { id: 9, nombre: '3000 + 850 UC + 28%', precio: 200000, imagen: '/img/PUBGUC.png' },
        { id: 10, nombre: '6000 + 2100 UC + 35%', precio: 400000, imagen: '/img/PUBGUC.png' },
        { id: 11, nombre: '12000 + 4200 UC + 35%', precio: 800000, imagen: '/img/PUBGUC.png' },
        { id: 12, nombre: '18000 + 6300 UC + 35%', precio: 1200000, imagen: '/img/PUBGUC.png' },
        { id: 13, nombre: '24000 + 8400 UC + 35%', precio: 1600000, imagen: '/img/PUBGUC.png' },
        { id: 14, nombre: '30000 + 10500 UC + 35%', precio: 2000000, imagen: '/img/PUBGUC.png' },
        { id: 15, nombre: '60000 + 21000 UC + 35%', precio: 4000000, imagen: '/img/PUBGUC.png' }
    ],
    pavos: [
        { id: 16, nombre: '1,000 Pavos', precio: 7.99, imagen: '/img/Pavos.png' },
        { id: 17, nombre: '2,800 Pavos', precio: 19.99, imagen: '/img/Pavos.png' },
        { id: 18, nombre: '5,000 Pavos', precio: 31.99, imagen: '/img/Pavos.png' },
        { id: 19, nombre: '13,500 Pavos', precio: 79.99, imagen: '/img/Pavos.png' }
    ],
    minecoins: [
        { id: 20, nombre: '320 Minecoins', precio: 1.99, imagen: '/img/Minecoins.jpeg' },
        { id: 21, nombre: '1,020 Minecoins', precio: 5.99, imagen: '/img/Minecoins.jpeg' },
        { id: 22, nombre: '1,720 Minecoins', precio: 9.99, imagen: '/img/Minecoins.jpeg' },
        { id: 23, nombre: '3,500 Minecoins', precio: 19.99, imagen: '/img/Minecoins.jpeg' },
        { id: 24, nombre: '8,000 Minecoins', precio: 49.99, imagen: '/img/Minecoins.jpeg' },
        { id: 25, nombre: '16,000 Minecoins', precio: 99.99, imagen: '/img/Minecoins.jpeg' }
    ],
    clashRoyale: [
        { id: 26, nombre: '80 Gemas', precio: 0.99, imagen: '/img/Gemas.jpg' },
        { id: 27, nombre: '500 Gemas', precio: 4.99, imagen: '/img/Gemas.jpg' },
        { id: 28, nombre: '1,200 Gemas', precio: 9.99, imagen: '/img/Gemas.jpg' },
        { id: 29, nombre: '2,500 Gemas', precio: 19.99, imagen: '/img/Gemas.jpg' },
        { id: 30, nombre: '6,500 Gemas', precio: 49.99, imagen: '/img/Gemas.jpg' },
        { id: 31, nombre: '14,000 Gemas', precio: 99.99, imagen: '/img/Gemas.jpg' }
    ],
    dragonCity: [
        { id: 32, nombre: '100 Gemas', precio: 1.99, imagen: '/img/GemasDG.png' },
        { id: 33, nombre: '300 Gemas', precio: 4.99, imagen: '/img/GemasDG.png' },
        { id: 34, nombre: '1,200 Gemas', precio: 19.99, imagen: '/img/GemasDG.png' },
        { id: 35, nombre: '3,200 Gemas', precio: 49.99, imagen: '/img/GemasDG.png' },
        { id: 36, nombre: '8,500 Gemas', precio: 99.99, imagen: '/img/GemasDG.png' }
    ],
    freeFire: [
        { id: 37, nombre: '100 Diamantes', precio: 4200, imagen: '/img/Diamantes.jpg' },
        { id: 38, nombre: '310 Diamantes', precio: 12000, imagen: '/img/Diamantes.jpg' },
        { id: 39, nombre: '520 Diamantes', precio: 19600, imagen: '/img/Diamantes.jpg' },
        { id: 40, nombre: '1060 Diamantes', precio: 38600, imagen: '/img/Diamantes.jpg' },
        { id: 41, nombre: '2180 Diamantes', precio: 76800, imagen: '/img/Diamantes.jpg' },
        { id: 42, nombre: '5600 Diamantes', precio: 182400, imagen: '/img/Diamantes.jpg' }
    ],
    codPoints: [
        { id: 43, nombre: '200 CP', precio: 1.99, imagen: '/img/CodPoints.png' },
        { id: 44, nombre: '500 CP', precio: 4.99, imagen: '/img/CodPoints.png' },
        { id: 45, nombre: '1,000 CP + 100 Bonus', precio: 9.99, imagen: '/img/CodPoints.png' },
        { id: 46, nombre: '2,000 CP + 400 Bonus', precio: 19.99, imagen: '/img/CodPoints.png' },
        { id: 47, nombre: '4,000 CP + 1,000 Bonus', precio: 39.99, imagen: '/img/CodPoints.png' },
        { id: 48, nombre: '7,500 CP + 2,000 Bonus', precio: 74.99, imagen: '/img/CodPoints.png' },
        { id: 49, nombre: '10,000 CP + 3,000 Bonus', precio: 99.99, imagen: '/img/CodPoints.png' }
    ]
};


document.addEventListener('DOMContentLoaded', () => {
    cargarProductos('robux', '#robux');
    cargarProductos('pubgUC', '#pubg-uc');
    cargarProductos('pavos', '#pavos');
    cargarProductos('minecoins', '#minecoins');
    cargarProductos('clashRoyale', '#clash-royale');
    cargarProductos('dragonCity', '#dragon-city');
    cargarProductos('freeFire', '#free-fire');
    cargarProductos('codPoints', '#codpoints');
});

function cargarProductos(categoria, selector) {
    const contenedor = document.querySelector(selector);
    productos[categoria].forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio.toFixed(2)}</p>
            <button class="btn-agregar" data-id="${producto.id}">Agregar al Carrito</button>
        `;
        contenedor.appendChild(div);
    });
}


let carrito = [];
const listaCarrito = document.querySelector('#lista-carrito tbody');
const totalCarrito = document.querySelector('#total');

document.querySelector('#productos').addEventListener('click', agregarProducto);

function agregarProducto(e) {
    if (e.target.classList.contains('btn-agregar')) {
        const productoSeleccionado = e.target.parentElement;
        leerDatosProducto(productoSeleccionado);
    }
}

function leerDatosProducto(producto) {
    const infoProducto = {
        id: producto.querySelector('button').getAttribute('data-id'),
        nombre: producto.querySelector('h3').textContent,
        precio: parseFloat(producto.querySelector('p').textContent.replace('$', '')),
        cantidad: 1
    };
    
    const existe = carrito.some(producto => producto.id === infoProducto.id);
    
    if (existe) {
        carrito = carrito.map(producto => {
            if (producto.id === infoProducto.id) {
                producto.cantidad++;
                return producto;
            }
            return producto;
        });
    } else {
        carrito.push(infoProducto);
    }
    
    actualizarCarrito();
}

function actualizarCarrito() {
    limpiarHTML();
    
    carrito.forEach(producto => {
        const { nombre, precio, cantidad } = producto;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${nombre}</td>
            <td>$${precio.toFixed(2)}</td>
            <td>${cantidad}</td>
            <td>$${(precio * cantidad).toFixed(2)}</td>
            <td><button class="btn-borrar" data-id="${producto.id}">X</button></td>
        `;
        listaCarrito.appendChild(row);
    });

    calcularTotal();
}

function calcularTotal() {
    let total = carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
    totalCarrito.textContent = total.toFixed(2);
}

function limpiarHTML() {
    listaCarrito.innerHTML = '';
}

listaCarrito.addEventListener('click', eliminarProducto);

function eliminarProducto(e) {
    if (e.target.classList.contains('btn-borrar')) {
        const id = e.target.getAttribute('data-id');
        const producto = carrito.find(p => p.id === id);
        
        const cantidadEliminar = prompt("¿Cuántos deseas eliminar?", 1);
        const cantidad = parseInt(cantidadEliminar);
        
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Cantidad no válida.");
            return;
        }

        if (cantidad >= producto.cantidad) {
            carrito = carrito.filter(p => p.id !== id);
        } else {
            producto.cantidad -= cantidad;
        }
        
        actualizarCarrito();
    }


    document.querySelector('#comprar').addEventListener('click', () => {
        const total = totalCarrito.textContent; 
        alert(`Su compra se realizó con éxito. El total es $${total}`); 
    });

}