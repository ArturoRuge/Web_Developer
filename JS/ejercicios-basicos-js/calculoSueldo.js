(function(c){
  "use strict";

  let consultar = (mensaje) => Number(prompt(mensaje));

  let sueldoBase = consultar("Digite el sueldo base"),
      venta1 = consultar("Digite la venta 1"),
      venta2 = consultar("Digite la venta 2"),
      venta3 = consultar("Digite la venta 3");

  let gananciaVentas = (venta1, venta2, venta3) => (venta1 + venta2 + venta3) * 0.1

  let comision = gananciaVentas(venta1, venta2, venta3);

  c(`La ganancia del 10% de las ventas fue de ${comision} y el sueldo total es de ${comision + sueldoBase}`);

})(console.log);