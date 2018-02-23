function saludarFamilia(apellido){
  return function saludarMiembro(nombre){
    console.log(`Hola ${nombre} ${apellido}`)
  }
}

const saludarFamiliaPerez = saludarFamilia("Perez")
const saludarFamiliaGOmez = saludarFamilia("Gomez")

saludarFamiliaPerez("Juan")
saludarFamiliaPerez("Pedro")

saludarFamiliaGOmez("Juannita")