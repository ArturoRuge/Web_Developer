//Los generadores son un tipo de funcion especial que podemos generar usando el simbolo "*" despues de la palabra function, esto nos permite definir un yield, que es como un marcador(return) a partir del cual se termina la función y la proxima vez que invoque la función, esta se va a ejecutar desde acá. Esto nos va devolver a partr del metodo next un objeto con clave value y done

//El yield puede recibir un valor, que se lo enviamos en el llamado de next, en este caso lo utlizamos para restablecer a los valores originales de inicio

function* fibonacci(){
  let a = 0, b= 1

  while(true){
    let f = a
    a = b
    b = a + f
    let reset = yield f
    if(reset) a = 0, b = 1
  }
}

const fibo = fibonacci()
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next(true))
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())