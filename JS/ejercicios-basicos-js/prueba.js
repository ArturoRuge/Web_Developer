(function(){
  "use strict";

  (function pedirNumero(){
    let number = 0,
        lista = [];
    while(number >= 0){
      number = Number(prompt("Digite un numero"));
      lista.push(number);
    }
    return console.log(`Los numeros digitados han sido ${lista}. Ha terminado porque ha digitado un número negativo`) 
  })();

 

})();