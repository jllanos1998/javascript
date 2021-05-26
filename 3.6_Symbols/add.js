let id = Symbol("id");
let id2 = Symbol("id2");

console.log(id === id2);
console.log(id, id2);
console.log(typeof id, typeof id2);

const NOMBRE = Symbol();
const SALUDAR = Symbol();

const persona = {
  [NOMBRE]: "Angel"
};
console.log(persona);

persona.NOMBRE = "Angel xCanonbox"
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR] = function () {
  console.log(`Hola`);
}

console.log(persona);
persona[SALUDAR]();



// const identidad = {
//     [rut]:'199349295-4',
//     nombre : 'angel',
//     edad : 29,
//     sexo : 'Masculino',
//     mostraInformacion : function(){
//         console.log(`Nombre:${identidad.nombre} Edad: ${identidad.edad} Sexo: ${identidad.sexo}`)
//     }
// }


// console.log(identidad[rut])