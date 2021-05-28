const mapa = new Map();
mapa.set("nombre", "Jon");
mapa.set("apellido", "Mircha");
mapa.set("edad", 35);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("correo"));
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));
console.log(mapa.get("nombre"));
mapa.set("nombre", "Angel Alata");
console.log(mapa.get("nombre"));
mapa.delete("apellido");

mapa.set(19, "diciembre");
mapa.set(false, "falso");
mapa.set({}, {});
console.log(mapa);

for (let [key, value] of mapa) {
  console.log(`Llave: ${key}, Valor: ${value}`);
}

const mapa2 = new Map([
  ["nombre", "KEnai"],
  ["edad", 7],
  ["animal", "perro"],
  [null, "nulo"]
]);

console.log(mapa2);

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);


// const Nombres = new Set(['jaime','luis','ESTEBAN','MARCOS','MATIAS','ESTEBAN','alfredo']);
// // console.log(Nombres.size) //Tamaño.
// // console.log(Nombres.add('jaime'))
// // Nombres.add(10)
// // Nombres.add(11)
// // Nombres.add(11)
// // Nombres.add('juaquin')
// // Nombres.delete('jaime')
// // Nombres.forEach((value)=>{
// //     console.log(value)
// // })

// let arreglo = Array.from(Nombres)
// const mayuscula = [];
// const minuscula = []
// arreglo.filter((datos)=>{
//     // let comparar = datos !== datos.toUpperCase()
//     if(datos === datos.toLowerCase()){
//         minuscula.push(datos)
//     }else{
//         mayuscula.push(datos)
//     }
//     return console.log(`${datos}`)

// })
// console.log(mayuscula,minuscula)