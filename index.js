alert("Bienvenidos a la Confitería más rica de Rosario");

//Carro de compras - array de almacenaje
const Carrito = [];
//Creo la clase para los productos
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

//Lista reducida de productos
const straciatella = new Producto("Straciatella dulce de leche", 4200);
const tortaToffi = new Producto("Torta Toffi", 3200);
const tiramisu = new Producto("Tiramisú", 4200);
const lemonPie = new Producto("Lemon Pie", 4600);
const chocotorta = new Producto("Chocotorta", 4600);

//Lista de Productos concatenados
const Productos = [straciatella, tortaToffi, tiramisu, lemonPie, chocotorta];

//Menú interactivo mediante prompt
let opcion = parseInt(
  prompt(`Confitería LogoIpsum ¿Qué producto desea comprar? Presione: 
                              1- Ver Productos 
                              2- Ver Mi Carrito 
                              3- Ver el precio total de su compra 
                              4- Salir  
  `)
);

//Muestra lo que se va almacenando
const mostrarCarrito = () => {
  let mensaje = `Carrito:`;
  Carrito.forEach((el, index) => {
    mensaje += `
                  ${index + 1}- ${el.nombre} $${el.precio}
              `;
  });

  alert(mensaje);
};

//Visualiza los productos y los va pusheando
const verProductos = () => {
  let mensaje = `Productos:
                    Seleccione el número del producto que desea comprar
      `;

  Productos.forEach((el, index) => {
    mensaje += `
                ${index + 1}- ${el.nombre} $${el.precio}
            `;
  });
  let opcion = parseInt(prompt(mensaje));
  Carrito.push(Productos[opcion - 1]);
};

//Recorre el carrito para ver el precio acumulado
const totalAcumulado = () => {
  let total = 0;
  Carrito.forEach((el) => {
    total += el.precio;
  });
  alert(" Su total acumulado es de: " + total);
};

//Bucle - 1- Catálogo 2- Mi carrito 3- Total acumulado y 4- Salir
while (opcion !== 4) {
  switch (opcion) {
    case 1:
      verProductos();
      break;
    case 2:
      mostrarCarrito();
      break;
    case 3:
      totalAcumulado();
      break;
    default:
      break;
  }
  //Vuelvo a preguntar para seguir comprando o salir

  opcion = parseInt(
    prompt(`¿Desea ver otro producto? Presione:   
                                1- Ver Catálogo 
                                2- Ver Carrito 
                                3- Ver Total acumulado 
                                4- Salir  
    `)
  );
  if (opcion == 4) {
    alert("Gracias por su visita....PD: Si tu nombre es Diana sos crack");
  }
}
