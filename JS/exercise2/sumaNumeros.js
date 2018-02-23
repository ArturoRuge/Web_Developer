(function(){
  "use strict"

  // function suma(...numeros){
  //   const sumatoria = numeros.reduce(function(acum, num){
  //     acum += num
  //     return acum
  //   }  , 0)
  //   return sumatoria
  //   }
    
  // function doble(...numeros){
  //   const resultado = numeros.map(function(numero){
  //     return numero * 2
  //   })
  //   return resultado
  // }

  // function pares(...numeros){
  //   const numPares = numeros.filter(function(num){
  //     return num % 2 === 0
  //   })
  //   return numPares
  // }

// ARROW FUNCTIONS

// const suma = (...numeros) => {
//   return numeros.reduce(function(acum, num){
//     acum += num
//     return acum
//   }, 0)
// }

const suma = (...numeros) => numeros.reduce((acum, num) => acum += num)

const doble = (...numeros) => numeros.map((numero) => numero * 2)

const pares = (...numeros) => numeros.filter((num) => num % 2 === 0)



  console.log(suma(4,5,6,7,8,9))
  console.log(doble(1,2,3,4))
  console.log(pares(4,5,6,7,8,9,33,44,77,88,92))
})();