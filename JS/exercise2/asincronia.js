(function(){
  console.log("Hola")

  //Todas las intruciones se van cargando en la pila de ejecución, (call stack) cuando esta esta vacia, el navegador busca en la cola de tareas(TASK QUEUE) si tiene algo que ejecutar, aqui es donde se carga setTimeout()


  setTimeout(function(){
    console.log("function asincro")
  }, 0)

  console.log("chau")
})();

//pila
//  
//  console.log("Hola")
//  console.log("Hola")
//  asincronia.js


//Cola de tareas
//  setTimeou()