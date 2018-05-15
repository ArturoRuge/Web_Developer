(function(){
  "use strict"
  let listadoNumeros = [],
      resultadoPromedio;

  for(let i=1; i < 4; i++){
    listadoNumeros.push(Number(prompt(`Digita el número  ${i}`)))
  };

  function promedio(listadoNumeros){
    let sumatoria = 0,
        promedio;
    for( let i in listadoNumeros){
      sumatoria += listadoNumeros[i]; 
    } 
    promedio = sumatoria / listadoNumeros.length;
    return promedio;
  }
  resultadoPromedio = promedio(listadoNumeros);
  console.log(`Él promedio de la sumatoria de los números es ${resultadoPromedio}`);
  
})();