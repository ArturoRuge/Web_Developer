class Persona {
  constructor(nombre, amigos = []){
    this.nombre = nombre
    this.amigos = amigos
  }

  //FORMAS DE SOLUCIONAR EL SCOPE DE THIS
  // ====1 Forma====Dentro del forEach, this is undefindes, asi que tenemos que creal una nueva variable (Que va a ser global en la funcion) _this o sel y apuntarla a
    //this, de esta forma podermos acceder a las 
    //propiedades del objeto,
  listarAmigos(){ 
    const _this = this
    this.amigos.forEach(function(amigo){
      console.log(`Mi nombre es ${_this.nombre} y mi amigo es ${amigo}`)
    })
    }
    // === 2 Forma  ===otra forma para solucionar el scope de this , es colocarle a la funcione l metodo bind(this)
     listarAmigos2(){
    this.amigos.forEach(function(amigo){
      console.log(`Mi nombre es ${_this.nombre} y mi amigo es ${amigo}`)
    }.bind(this))
  }
  // === 3 Forma  ===Es usar arrow functions
     listarAmigos3(){
    this.amigos.forEach((amigo) => {
      console.log(`Mi nombre es ${_this.nombre} y mi amigo es ${amigo}`)
    }
  }
  
}

const david = new Persona("David", ["Pepe", "Jhon"])
david.listarAmigos()