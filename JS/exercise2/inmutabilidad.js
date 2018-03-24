let art ={ nombre: "Arturo", apellido: "Ruge", edad: 29}
let otroArt = art

console.log(art === otroArt)

otroArt.edad = 33

console.log(art.edad)

//Esto es un efecto de lado, quiere decir que la funcion lo que esta modificando es un objeto(o puede ser variable) que no esta dentro de su scope, ose que es global, esto se debe evitar
function cumpleanos(persona){
  persona.edad++
}
console.log("objeto mutable")

cumpleanos(art)
console.log(art.edad)
cumpleanos(art)
console.log(art.edad)
cumpleanos(art)
console.log(art.edad)
cumpleanos(art)
console.log(art.edad)
console.log(art.edad)


//Usando assign podemos copiar un objeto, el primer parametro es el nuevo objeto, el segundo es el objeto que se va a duplicar

function cumpleanos2(persona){
  const clone = Object.assign({}, persona)
  clone.edad++
  return clone
}
console.log("objeto inmutable")

console.log(cumpleanos2(art))
console.log(art.edad)
console.log(cumpleanos2(art))
console.log(art.edad)
console.log(cumpleanos2(art))
console.log(art.edad)
console.log(cumpleanos2(art))
console.log(art.edad)

