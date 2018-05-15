(function(){
  "use strict"
  const precio = Number(prompt("El precio del producto"));

  let precioFinal = precio + (precio * 0.21);

  console.log(`El precio es ${precio}, el precio final con iva del 21% es ${precioFinal}`)
})();