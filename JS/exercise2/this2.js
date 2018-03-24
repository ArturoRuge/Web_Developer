class Toggable{
  constructor(el){
    this.el = el
    this.el.innerHTML = "OFF"
    this.activated = false
    this.onClick = this.onClick.bind(this)
    this.el.addEventListener("click", this.onClick)

    // En esta linea this.el.addEventListener("click", this.onClick) --- this no hace referencia al objeto Toogable  que creamos, sino al objeto html que disparo el evento --- <button>
    //Por eso usamos el metodo bind, para decirle que el contexto va a cambiar y ahora es this (el del objeto) es el que va a invocar la funcion onclick
  }

  onClick(){
    console.log("Este elemento disparo", this)
    this.activated = !this.activated
    this.toogleText()
  }

  toogleText(){
    this.el.innerHTML = this.activated ? "ON" : "OFF" 
  }
}

const boton = document.getElementById("boton")

const miBoton = new Toggable(boton)

