//* Creacion de objeto productos 

class Producto {
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

const pasadorCordones = new Producto(1, "pasadorCordones", 1000,"img/pasadorCordones.jpeg");
const rompecabezas = new Producto(2, "rompecabezas", 1500,"img/rompecabezas.jpeg");
const secuencias = new Producto(3, "secuencias", 3000,"img/secuencias.jpeg");
const ruleta = new Producto(4, "ruleta", 4000,"img/ruleta.jpeg");
const motricidad = new Producto(5, "motricidad", 5000,"img/motricidad.jpeg");

const productos = [pasadorCordones, rompecabezas, secuencias, ruleta, motricidad];

//* creacion del array del carrito

let carrito = [];

//* local storage

if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

//* creacion objeto de usuarios



//* modificamos DOM
const contenedorProductos = document.getElementById("contenedorProductos");

//* Funcion para mostrar Productos y agregar al carrito

const mostrarProductos = () => {
    productos.forEach( producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                <div class= "card-body">
                    <h5> ${producto.nombre}</h5>
                    <p> $${producto.precio}</p>
                    <button class="btn colorBoton" id="botonRestar${producto.id}">-</button>
                    <input type="text" class="imputCantidad" value="1" id="cantidad${producto.id}">
                    <button class="btn colorBoton" id="botonMas${producto.id}">+</button>
                    <button class="btn colorBoton" id="boton${producto.id}" > Agregar al Carrito </button>
                </div>
            </div>
            `
        contenedorProductos.appendChild(card);
        
        //* Agregar productos al carrito
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click",() => {
            agregarAlCarrito(producto.id);
        })
        //* Sumar cantidad de compra
        const botonMas = document.getElementById(`botonMas${producto.id}`);
        botonMas.addEventListener("click",() => {
            aumentarCantidad(producto.id);
        })
        //* Restar cantidad de compra
        const botonRestar = document.getElementById(`botonRestar${producto.id}`);
        botonRestar.addEventListener("click",() => {
            restarCantidad(producto.id);
        })
    })
}

mostrarProductos();
console.log(document.getElementById("cantidad1").value);

const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    const aumentarCantidad = document.getElementById("cantidad"+id).value; 
    if(productoEnCarrito){
        for(i=0; i<aumentarCantidad;i++){
        productoEnCarrito.cantidad++;
        }
    }else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
        producto.cantidad=1;
        for(i=1; i<aumentarCantidad;i++){
            producto.cantidad++;
        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotal();
    
}

const aumentarCantidad = (id) => {
    let cantidad = document.getElementById("cantidad"+id);
    cantidad.value++;
}
const restarCantidad = (id) => {
    let cantidad = document.getElementById("cantidad"+id);
    if (cantidad.value > 0) {
        cantidad.value--;
    }
}

//* Mostrar y modificar el carrito de compras

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})


const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                <div class= "card-body">
                    <h5> ${producto.nombre}</h5>
                    <p> $${producto.precio}</p>
                    <p> cantidad: ${producto.cantidad}</p>
                    <button class="btn colorBoton" id="eliminar${producto.id}" > Eliminar producto </button>
                </div>
            </div>
            `
        contenedorCarrito.appendChild(card);
        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () =>{
            eliminarDelCarrito(producto.id);
        })
    })
    calcularTotal();
}
//Funcion eliminar producto del carrito

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Funcion vaciar carrito

const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", () => {
    eliminarTodoCarrito();
})

const eliminarTodoCarrito = () => {
    carrito = [];
    mostrarCarrito();
    localStorage.clear();
}

//Mostramos mensaje con el total de la compra

const total = document.getElementById("total");
const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = `: $${totalCompra}`;
}

class Usuario{
    constructor(usuario, contraseña, descuento){
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.descuento = descuento;
    }
}

const marianofra = new Usuario("marianofra", "1234", 0.8);
const camifra = new Usuario("camifra", "5678", 0.75);

const arrayUsuarios = [marianofra, camifra];

//* Funcion loguearse

const contenedorUsuario = document.getElementById("contenedorUsuario");


