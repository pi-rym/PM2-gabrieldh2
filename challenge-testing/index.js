class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

 class Carrito{
    constructor(){
        this.carrito = []
        this.id = 0
    }

    agregarProducto(compra){
     const productos = compra
     this.carrito.push(productos)
     this.id++
    }

    calcularTotal(){
        let total = 0;
        for (let producto of this.carrito) {
            total += producto.precio; 
        }
        return total;
    }

    aplicarDescuento(porcentaje){
        const descuento = (porcentaje / 100) * this.calcularTotal();
        return this.calcularTotal() - descuento;
    }
}


const producto1 = new Producto("Camisa", 20);
const producto2 = new Producto("Camisa", 20);

const cliente = new Carrito()

//cliente.agregarProducto(producto1)
//cliente.agregarProducto(producto2)

//console.log(cliente.carrito , cliente.calcularTotal());



const safe = {Carrito , Producto}


//export default safe


module.exports = safe




