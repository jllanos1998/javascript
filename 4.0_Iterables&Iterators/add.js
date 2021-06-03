const iterable = { 1, 2, 3, 4, 5};
/* const iterable = "Hola Mundo"; */


// Accedemos al iterador del iterable 
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());

let next = iterador.next();

while (!net.done) {
  console.log(next.value);
  next = iterador.next();
}