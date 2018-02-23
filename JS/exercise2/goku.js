let vidaGoku = 100
let vidaSuperman = 100

const MIN_POWER = 5
const MAX_POWER = 12 

let round = 0

const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)

const ambosVivos = () => vidaGoku > 0 && vidaSuperman > 0

const gokuSigueVivo = () => vidaGoku > 0

while(ambosVivos()){
  round++
  console.log(`round numero ${round}`)

  let golpeGoku = calcularGolpe()
  let golperSuperman = calcularGolpe()

  if(golpeGoku > golperSuperman){
    console.log(`Goku ataca con un golpe de ${golpeGoku}`)
    vidaSuperman -= golpeGoku
    console.log(`SUperman queda con una vide de ${vidaSuperman}`)
  } else{
    console.log(`Superman ataca con un golpe de ${golperSuperman}`)
    vidaGoku -= golperSuperman
    console.log(`Goku queda con una vida de ${vidaGoku}`)
  } 
}

if (gokuSigueVivo()) {
  console.log(`Goku gano la pelea con una vida de ${vidaGoku}`)
}else {
  console.log(`Superman gano la pelea con una vida de ${vidaSuperman}`)
}