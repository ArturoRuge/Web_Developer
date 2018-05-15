(function(c){
  "use strict";

  let capital = Number(prompt("Digite el capital"));

  let ganancia = capital => capital * 0.02

  c(`La ganancia de la inversión despues de un mes es de ${ganancia(capital)}`)

})(console.log);