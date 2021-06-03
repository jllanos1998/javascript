/* const ws = new WeakSet();

let valor1 = { "valor1": 1 };
let valor1 = { "valor2": 2 };
let valor1 = { "valor3": 3 };
 */

const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);
wm.set(llave3, 3);

console.log(wm.has(llave1));
console.log(wm.has(llave3));

console.log(wm.get(llave1));
console.log(wm.get(llave2));
console.log(wm.get(llave3));

wm.delete(llave2);
console.console.log((wm));

wm.set(llave2, 2);
wm.set(llave3, 3);
console.log(wm);

setInterval(() => console.log(vm))
/*Repite cada rapido la información */

