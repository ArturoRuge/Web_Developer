(function(){
  "use strict"

  function agregarDatos(cantidadDatos){
    let listaNumeros = [];
    for(let i = 0; i<cantidadDatos; i++){
      listaNumeros.push(Number(prompt(`Ingrese un número`)));
    }
    return listaNumeros;
  }

  function numeroMayor(lista){
    console.log(lista);
    let numeroMayor = 0;
    for(let numero in lista){
      if(lista[numero] > numeroMayor){
        numeroMayor = lista[numero];
      } 
    }
    return numeroMayor;
  }

  console.log(`El numero mayor es ${numeroMayor(agregarDatos(prompt(`Cantidad de datos a ingresar`)))}`)

})();