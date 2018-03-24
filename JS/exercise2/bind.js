function saludar(nombre, apellido){
  console.log(`Hola ${nombre} ${apellido} !!!`)
}

const saludarArt = saludar.bind(null, "Arturo")

//En este caso no quiero cambiar el contexto de la funcion, por eso coloco como valor null, pero si quiero que bind me devuelva la funcion saludar con el prmer parametro seteado con un valor predefinido "Arturo"
saludarArt("Ruge")
saludarArt("Gomez")

//___________________________

//Call es un metodo que se utiliza para definir el contexto de la funcion, en este caso es el objeto art
const art = {
  nombre : "Arturo",
  apellido : "Ruge"
}

function saludar2(veces, uppercase){
  let str = `hola ${this.nombre} ${this.apellido}`
  str = uppercase ? str.toUpperCase() : str
  for(let  i = 0; i < veces; i++){
   console.log(str)   
  }
}
  

saludar2.call(art, 3, true)

//Si tenemos un array con los valores que va a recibir la funcio. ...params desarma el array a elementos separados por comas
const params = [3, true]
saludar2.call(art, ...params)

//otro metodo parecido a call es apply, solo cambia la forma que se le envia los paramentros
saludar2.apply(art, [3, true])