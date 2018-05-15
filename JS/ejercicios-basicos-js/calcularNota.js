(function(c){
  "use strict";

  let ingresoDato = (mensaje) => Number(prompt(mensaje));

  let parcial1 = ingresoDato("calificación parcial 1"),
      parcial2 = ingresoDato("calificación parcial 2"),
      parcial3 = ingresoDato("calificación parcial 3"),
      examen = ingresoDato("calificación examen"),
      trabajo = ingresoDato("calificación trabajo");

  function promedio(...valores){
    let acumulador = 0;
    for(let i in valores){
      acumulador += valores[i];
    }
    return acumulador / valores.length;
  };

  let porcentaje = (promedio, porcentaje) => promedio * (porcentaje/100);

  let porcentajeParcial = porcentaje(promedio(parcial1, parcial2, parcial3), 55),
      porcentajeExamen = porcentaje(examen, 30),
      porcentajeTrabajo = porcentaje(trabajo, 15);

  c(`La nota final del alumno es de ${(porcentajeExamen + porcentajeParcial + porcentajeTrabajo).toFixed(2)}`);

})(console.log);