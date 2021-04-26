



//Ejercicio Numero 1;
// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// function caracteres(texto){
//     if(texto === undefined){ return console.warn('No haz ingresado ningun valor')}
//     if(typeof texto !== 'string' ){
//         return console.error(`No puede ingresar un valor ${typeof texto} solamente puedes ingresar valores de tipo strings`)
//     }
//     return `Caracter:${texto} Longitud:${texto.length}`
// }

// console.log(caracteres('angel'))

// Ejercicio Numero 2.
// Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// function recortarCaracter(caracter,posicion){
//     if(caracter === undefined && posicion===undefined){
//         return console.warn('No haz ingresado nada por favor ingresa un valor la proxima vez.')
//     }
//     if(typeof caracter !== 'string' && posicion === undefined){
//         return console.error(`Ingresaste una tipo de dato ${typeof caracter} diferente a string, y el segundo parametro esta vacio`)
//     }
//     if(typeof caracter !== 'string'){
//         return console.error('no puedes ingresar un tipo de datos que no sea string')
//     }
//     let resultado = caracter.slice(0,posicion);
//     return console.log(`caracter:${caracter} \n caracteres recortados:${posicion} \n resultado :${resultado}`)
// }

// recortarCaracter('andy es el mejor programador de javascripts',5);



// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].


// let caracter = 'mañana tengo que trabaja llorare';

// console.log(caracter.split(' '))

// const convertirArray = (texto)=>{
//     if(texto === undefined){
//         return console.warn('No puedes dejar el parametro vacio, por favor ingresar un valor')
//     }
//     if(typeof texto !== 'string'){
//         return console.error(`Ingresaste una valor de tipo ${typeof texto} debes ingresar un valor de tipo strings`)
//     }
   
//     let convertidor = texto.split(' ');
//     return console.log(convertidor)
// }

// convertirArray('matias es el mejor jugador del mundo')


//Ejercicio numero 4
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.


// function repetir(x,texto){
//     let cadena = '';
//     if(x === undefined && texto === undefined){
//         return console.warn('No haz ingresado ningun valor.')
//     }
//     if(typeof x !== 'number'){
//         return console.error(`No puedes ingresar un valor de tipo ${typeof x} solamente puedes ingresar un valor numerico`)
//     }
//     for(let i=0;i<x;i++){
//         cadena += texto; 
//     }
//     return console.log(cadena)
// }
// repetir()



// function repetirPalabra(texto,repetir){
//     texto += ' '
//     let repetirCaracter = texto.repeat(repetir);
//     return console.log( `${repetirCaracter }` );
// }

// repetirPalabra('javiera',20)


// let cadena = "NA "; // con espacio al final
// let cadenaRepetida = cadena.repeat(20); // repetir 20 veces
// let cancion = cadenaRepetida + "Batman!";
// console.log(cancion);


// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

// function invertirPalabra(texto){
//     return texto.split(' ').reverse().join(' ');
// }
// console.log(invertirPalabra('hola mundo'))

// const invertirCadena = cadena => cadena.split("").reverse().join("");
 
// let cadena = "Hola";
// console.log("Cadena:", invertirCadena(cadena));
// let cadena = "Hola, mi nombre es Antonio";
// let cadenarevertida = "";
   

// for(let i = cadena.length-1; i>=0; i--)
// {
//   cadenarevertida += cadena[i];
// }
// console.log(cadenarevertida);



// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

// let array = ['hola','como','estas','como','como','como'];


// for(let i=0; i<=array.length; i++){
//     if(array[i] === 'como'){
//         cont++
//     }
// }
// console.log(cont)

// function repetirPalabra(texto,palabra){
//     let cont=0;
//     let convertir = texto.split(' ')
//     for(let i=0; i<=convertir.length; i++){
//         if(convertir[i] === palabra){
//             cont++
//         }
//     }
//     return console.log(`${cont}`);
// }

// repetirPalabra('hola amigo hola como hola como como como como','como')

// function contadorRepetir(texto,palabra){
//     let convertiArray = texto.split(' ');

// }


// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.



// function polindromo(texto){
//     let palabra = texto.split('');
//     let converti1 =palabra.join('')
//     let invertir =texto.split('').reverse();
//     let convertir2 = invertir.join('')
//     if(converti1 === convertir2){
//         return console.log(`palabra:${palabra}\n invertido:${invertir}\n ${palabra} === ${invertir} es una frase polidromo`)
//     }else{
//         return console.log('no es una frase polidromo')
//     }
    
// }


// // polindromo('jaime')


// let texto = 'salas';

// let cont = 0;
// let logitud = texto.length;
// let separar = texto.split();
// let alrevez = separar.reverse();
// for(let i = 0 ; i<logitud.length ; i++){
//     if(separar[i] == alrevez[m]){
//         cont+=1;
//     }
//     m -=1;
// }

// if(cont==texto.length){
//     console.log('es palindromo')
// }else{
//     console.log('no es palindromo')
// }

// const polindromo = (texto = "") => {
//     if(!texto)
//     return console.warn("no es una frase");
    
//     let poli = texto.split("").reverse().join("");
    
//     if (texto === poli)
//     console.info(`Si es polindromo ${texto}, palabra al reves ${poli}`);
    
//     if(texto !== poli)
//     console.info(`No es polindromo ${texto}, palabra al reves ${poli}`);
     
    
//     }
    
    
//     polindromo("hola mundo");
//     polindromo("ana");


// let texto = 'salas';

// let separar = texto.split('');
// let alrevez = separar.reverse();

// let cont = 0;
// let longitud = texto.length;
// let leng = longitud-1
// for(let i = 0 ; i<longitud ; i++){

//     if(separar[i] == alrevez[leng]){
//         cont+=1;
//     }
//     leng -=1;
// }

// if(cont==texto.length){
//     console.log('es palindromo')
// }else{
//     console.log('no es palindromo')
// }

// console.log(separar)



// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

// let array= [1,2,3,4,5];

// function patron(texto){
//     if(texto === undefined){
//         return console.warn('Tienes que ingresar un texto al parametro no puede quedar vacio')
//     }
//     if(typeof texto !== 'string'){
//         return console.error(`El valor ingresado es un ${typeof texto} y se debe ingresar un caracter`)
//     }
//     let patron = texto.split('');
//     let expReg = /[xyz]/g;
//     const array =[];
//     patron.forEach((elemento)=>{
//         if(!elemento.match(expReg)){
//             array.push(elemento)
//         }
//     })
//     console.log(array.join(','))
//     // if(patron === expReg.test(patron)){
//     //     patron.pop()
//     // }else{
//     //     console.log(patron)
//     // }
//     // return console.log(patron);
// }

// patron('xyz1xyz2xyz3')


// let cadena = "xyz1, xyz2, xyz3";
// let re = /xyz/g;
// let resultado = cadena.replace(re, '');
// console.log(resultado);


// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.



// const numeroRandom = (min,max)=>{
//     if(Math.sign(min) === -1 && Math.sign(max)=== -1) {
//         return console.error('No puedes ingresar un valor negativo')
//      }
//     if(min===undefined && max === undefined){
//         return console.warn('No pueden estar los parametros vacios deben tener numeros')
//     }
//     if(typeof min !== 'number'){
//        return console.error(`Ingresaste un valor ${typeof min} debes ingresar un numero`)
//     }
  
//     let numero = Math.round(Math.random()*(max - min) + min);
//     return console.log(numero)
// }

// numeroRandom(501,600);

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.


// function capicua(numero){
//     if(numero === undefined){return console.warn('No púedes dejar los parametros vacios')}
//     if(typeof numero !== 'number'){return console.error('No puedes ingresar un valor diferente a numero')}
//     let convertirString = numero.toString();
//     let split = convertirString.split('');
//     let convertiSplit = split.reverse();
//     let unir =convertiSplit.join('');
//     if(convertirString===unir){
//        return console.log('es capicua')
//     }else{
//         console.log('No es capicua')
//     }

// }

// capicua(3003)
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.