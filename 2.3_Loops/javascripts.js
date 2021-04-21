

// let pass = 'simon';
// let Dato = prompt('Ingrese su contraseña')

// while(pass != Dato ){
//     if(pass != Dato){
//         console.log('Su contraseña es incorrecta');
//         break
//     }
//     else {
//         console.log('Su contraseña es correcta Bienevenido luis')
//         break
//     }
// }

// let contador = 0;
// do{
//     if(contador %2===0 && contador%5===0){
//         console.log(`multipo de 2 y 5 ${contador}`)
//     }
//     else if(contador %2===0){
//         console.log(`Par ${contador}`)
//     }else if(contador %2===1){
//         console.log(`Impar ${contador}`)
//     }
//     contador++
// }
// while(contador <= 30)
    


// for(let i=0; i<=20; i++){
//     console.log(i)
// }


// let array = [10,20,30,40,50,60,70,80,90,100];

// for(let i =0; i<=array.length; i++){
//     console.log(array[i])
// }



const persona = {
    nombre:'luis',
    apellido:'llanos',
    edad : 22,
    sexo : ['masculino','femenino']
}


for(let propiedad in persona){
    console.log(`key${propiedad} value:${persona[propiedad]}`)
}