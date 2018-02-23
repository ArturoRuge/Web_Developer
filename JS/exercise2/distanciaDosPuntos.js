class Punto{
  constructor(x, y){
    this.x = x
    this.y = y
  }
  moverEnX(x) { this.x += x}
  moverEnY(y){this.y += y}
  distancia(p){
    const x = this.x - p.x
    const y = this.y - p.y

    return Math.round(Math.sqrt( x * x + y * y)) 
  }
}  

const puntoA = new Punto(0, 4)

const puntoB = new Punto(3, 0)


console.log(puntoA.distancia(puntoB))
puntoA.moverEnX(10)
console.log(puntoA.distancia(puntoB))
puntoB.moverEnY(-4)
console.log(puntoB.distancia(puntoA))