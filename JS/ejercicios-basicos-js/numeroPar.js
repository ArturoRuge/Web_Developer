(function(){
  "use strict"

  let numero = Number(prompt("Digite un Número"));

  let numeroPar = (numero) => (numero % 2) === 0 ? console.log("Numero par") : console.log("Numero Impar");

  numeroPar(numero);
  
})();