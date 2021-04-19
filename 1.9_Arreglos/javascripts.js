
//Para acceder algun elementos del arreglo, tenemos que poner la posicion del arreglo, los arreglos parte de la posicion 0.
// let arreglo = ['jaime',12,true, [1,2,3,4,5],'Angel'];
// console.log(arreglo[1])
// console.log(arreglo[3][1])



// let array = Array.of('2',1,3,4,5,23,43,32,21,12);
// console.log(array);

// let array1 = Array(50).fill(30);
// console.log(array1);

// let array = new Array('23',12,true,[1,2,3,4,5]) //Ya no es recomendable utilizar esta manera, para crear arreglos.

//Metodos.
// let colores = ['azul','blanco','amarillo'];
// colores.push('verde');
// console.log(colores);
// let nombres = ['luis','esteban','matias'];
// console.log(nombres)
// nombres.pop();
// console.log(nombres)

const paises = ['peru','chile','argentina','bolivia','colombia','brazil','ecuador','canada','españa','estados unidos']

// paises.forEach(function(elemento,indice){
//     document.write(`<h1>${elemento}</h1><h2>Posicion:${indice}</h2>`)
// })

paises.forEach((el,ind)=>{
    document.write(`<ul><li># ${ind} ${el}</li></ul>`)
})