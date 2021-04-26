import Persona,{pi} from '../js/constantes.js'
import {aritmetica as calculo} from '../js/aritmetica.js'

console.log(pi)

// console.log(sumar(3,4))
// console.log(restar(7,4))
console.log(calculo.sumar(22,32))
console.log(calculo.restar(100,32))
console.log(calculo.multiplicar(10,32))
console.log(calculo.dividir(100,10))

const luis = new Persona()
console.log(luis)