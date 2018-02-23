(function(){
  "use strict"

  function prefijo(pre){
    return function(word){
      console.log(pre + word)
    }
  }

  const prefijoRe = prefijo("Re")
  const prefijoDo = prefijo("Do")


  prefijoRe("cansado")
  prefijoDo("ce")
  prefijoRe("matado")
})();