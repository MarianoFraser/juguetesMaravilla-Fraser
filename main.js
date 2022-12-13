//* Creacion de objetos (Descuentos)

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

//* reconocimiento de usuario y calculo de descuento

let descuentoCompra = 1;
let tipoDeUsuario = parseInt (prompt ("Bienvenido, por favor identifiquese para continuar: \n\n1)Crear usuario \n2)Loguear con usuario existente \n3)Ingresar como visitante"));
switch(tipoDeUsuario){
    case 1:
        alert("proximamente, ojala vuelvas pronto, te dejamos 10% de descuento")
        descuentoCompra = 0.9;
        break;
    case 2:
        let usuarioLogeo = prompt ("Ingrese Usuario");
        let contraseñaLogeo = prompt ("Ingrese Contraseña");
        const buscado = arrayUsuarios.find(usuarios => usuarios.usuario === usuarioLogeo);
        if(buscado != undefined){
            if(contraseñaLogeo === buscado.contraseña){
                descuentoCompra = buscado.descuento;
            }else{
                alert("Usuario invalido - se ingresa como visitante");
            }
        }else{
            alert("Usuario invalido - se ingresa como visitante");
        }
        break;
    case 3:
        descuentoCompra = 1;
        break;
}

//* MARKET SUMATORIA DE PRODUCTOS Y CALCULO IVA

let seleccionarProductos = parseInt (prompt ("Seleccione el producto deseado: \n\n1)Pasador de cordones $1000 + iva \n2)Rompecabezas $1500 + iva \n3)Secuencias $3000 + iva \n4)Ruleta AVD  $4000 + iva \n0)Volver al inicio"));

//* ciclo celeccionar nuevamente producto hasta ser correcto, a los 5 ingresos no validos vuelve
let numeroErrores = 0
while (seleccionarProductos <0 || seleccionarProductos >4){
    seleccionarProductos = parseInt (prompt ("Seleccione nuevamente un producto del 1 al 4"));
    numeroErrores = numeroErrores + 1;
    if (numeroErrores >= 5){
        seleccionarProductos = 0;
    }
}

//* ingreso cantidad de productos deseados si se eligio bien el producto
let seleccionarCantidad = 0;
if(seleccionarProductos >0 && seleccionarProductos <5){
    seleccionarCantidad = parseInt (prompt ("Seleccione la cantidad deseada"));
}

//*Funcion flecha para calculo IVa y descuento
let productoMasIva = (a,b) => {
    return a * b * 1.21 * descuentoCompra;
}

switch(seleccionarProductos){
    case 1:
        alert("El costo final con iva es $" + productoMasIva(1000,seleccionarCantidad));
        break;
    case 2:
        alert("El costo final con iva es $" + productoMasIva(1500,seleccionarCantidad));
        break;
    case 3:
        alert("El costo final con iva es $" + productoMasIva(3000,seleccionarCantidad));
        break;
    case 4:
        alert("El costo final con iva es $" + productoMasIva(4000,seleccionarCantidad));
        break;
    default:
        alert("Se selecciono Volver");
}

