(function(c){
  "use strict";

  let ingresoDato = (mensaje) => Number(prompt(mensaje));

  let numeroHombres = ingresoDato("Ingrese el numero de hombres"),
      numeroMujeres = ingresoDato("Ingrese el numero de mujeres"),
      totalEstudiantes = numeroHombres + numeroMujeres;

  let porcentaje = (cantidad, cantidadTotal) => (cantidad * 100) /  cantidadTotal;

  c(`El total de estudiantes es ${totalEstudiantes}, el porcentaje de mujeres es de ${porcentaje(numeroMujeres, totalEstudiantes).toFixed(2)}% y el porcentaje de hombre es de ${porcentaje(numeroHombres, totalEstudiantes).toFixed(2)}%`);

  
})(console.log);