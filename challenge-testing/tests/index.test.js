const cliente = require('../index')

const {Producto , Carrito} = cliente

describe('Producto', () => {
    test('Crear un producto con nombre y precio', () => {
        const producto = new Producto("Camisa", 20);
        expect(producto.nombre).toBe("Camisa");
        expect(producto.precio).toBe(20);
    });
});

describe('Carrito', () => {
    let carrito;

    beforeEach(() => {
        carrito = new Carrito();
    });

    test('Agregar producto al carrito', () => {
        const producto = new Producto("Camisa", 20);
        carrito.agregarProducto(producto);
        expect(carrito.carrito.length).toBe(1);
    });

    test('Calcular total del carrito', () => {
        const producto1 = new Producto("Camisa", 20);
        const producto2 = new Producto("Pantalón", 30);
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        expect(carrito.calcularTotal()).toBe(50);
    });

    test('Aplicar descuento al carrito', () => {
        const producto1 = new Producto("Camisa", 20);
        const producto2 = new Producto("Pantalón", 30);
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        expect(carrito.aplicarDescuento(10)).toBe(45);
    });
});