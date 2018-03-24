//Creamos una funcion la cual va a devolver un objeto, el cual va a ser un iterador que va a devolcer el proximo numero, en formato objeto con dos claves, value para el valor y done para definir si debe terminar su iteración, en este caso no va a terminar (siempre se deben llamar next, value, done)

//A la funcion le podemos colora un reset para que vuelva a los valores por defecto


function fibonacci(reset){
  if(reset) a = 0, b = 1
  let a = 0, b = 1

  return{
    next: function() {
      let f = a
      a = b
      b = f + a
      return{ value: f, done: false}
    }
  }
}

const fibo = fibonacci()
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next(true))
console.log(fibo.next().value)
console.log(fibo.next().value)
console.log(fibo.next().value)

// podemos hacer un loop for en la varible fibo, cada vez que empiece un ciclo, va a llamar al metodo next, pero debemos crear de una forma distinta, creamos un objeto, y vamos asignar la funcion fibonacci a una clave llamada Symbol.iterator, con esto el for ya va a poder iterar sobre el objeto

const fibo2 = {}

fibo2[Symbol.iterator] = fibonacci

let i = 0

for(let value of fibo2){
  console.log(value)
  i++
  if(i > 20) break
}