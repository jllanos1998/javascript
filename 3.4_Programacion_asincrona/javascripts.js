// const usuarios=[
//     {id:1 , nombre:'jaime', profesion_id: 1},
//     {id:2 , nombre:'Angel', profesion_id: 1},
//     {id:3 , nombre:'Manuel', profesion_id: 2}
// ]

// const profesion = {
//     1: 'programador',
//     2: 'diseñador'
// }

// function getUsuarios(callback){
//     setTimeout(()=>{
//         callback(null,usuarios)
//     },200)
// }

// function getUsuario(id, callback){
//     setTimeout(()=>{
//         callback(null,usuarios.filter((usuario)=> usuario.id === id)[0])
//     },200)
// }
// function getProfesion(id, callback){
//     setTimeout(()=>{
//         callback(null,profesion[id])
//     },200)
// }

// getUsuarios((err,usuarios)=>{
//     const alejandroid= usuarios[1].id;
//     getUsuario(alejandroid,(err,usuario)=>{
//         const profesionid =usuario.profesion_id;
//         getProfesion(profesionid,(err,profesion)=>{
//             console.log('La profesion de angel es:',profesion)
//         })
//     })
// })

// function cuadradoCallback(value,callback){
//     setTimeout(()=>{
//         callback(value,value*value);
//     },Math.random()*100)

// }

// cuadradoCallback(5,(value,resultado)=>{
//     console.log(`value: ${value} resultado:${resultado}`)
//     cuadradoCallback(10,(value,resultado)=>{
//         console.log(`value: ${value} resultado:${resultado}`)
//         cuadradoCallback(15,(value,resultado)=>{
//             console.log(`value: ${value} resultado:${resultado}`)
//             cuadradoCallback(20,(value,resultado)=>{
//                 console.log(`value: ${value} resultado:${resultado}`)
//                 cuadradoCallback(25,(value,resultado)=>{
//                     console.log(`value: ${value} resultado:${resultado}`)

//                 })

//             })

//         })

//     })

// })

// const personas = [
//     {nombre:'jaime', edad:30,sexo:'Masculino'},
//     {nombre:'angel', edad:40,sexo:'Masculino'},
//     {nombre:'javiera', edad:20,sexo:'femenino'},
//     {nombre:'esteban', edad:13,sexo:'Masculino'},
//     {nombre:'roberto', edad:30,sexo:'Masculino'},
// ]

// const contenedor = document.getElementById('contenedor');
// const button = document.getElementById('button');
// const body = document.getElementById('body')
// function getPersona(){
//     let nombre;
//     let edad;
//     let sexo;
//     let div = document.createElement('div');
//     load()
//     personas.forEach((valor)=>{
//         setTimeout(()=>{
//             nombre = valor['nombre'];
//             edad = valor['edad']
//             sexo = valor['sexo'];
//             div.innerHTML += `<div class=>
//             <h2>${nombre}</h2>
//             <p>${edad}</p>
//             <p>${sexo}</p>
//             </div>`

//         },10000)

//         contenedor.appendChild(div)
//       })

// }
// function load(){
//     let spinner = document.createElement('div');
//     spinner.classList.add('spinner')
//     body.appendChild(spinner);
//     setTimeout(()=>{
//         spinner.remove()
//     },9000)
// }

// button.addEventListener('click',()=>{
//     getPersona();
// })

// function cuadradoPromesa(valor){
//     if(typeof valor !== 'number'){
//         return Promise.reject(`El valor ingresado es de tipo ${typeof valor} y debes ingresar numeros pinche pendejo`)
//     }
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(
//                 {
//                     valor,
//                     resultado:valor*valor
//                 }
//             )
//             reject('No haz ingresado un valor numerico')
//         },1000)
//     })
// }

// cuadradoPromesa(1).then((dato)=>{
//     console.log(dato)
//    return cuadradoPromesa(2)
// }).then((dato)=>{
//     console.log(dato)
//     return cuadradoPromesa(3)
// }).then((dato)=>{
//     console.log(dato)
//     return cuadradoPromesa(4)
// }).then((dato)=>{
//     console.log(dato)
//     return cuadradoPromesa(5)
// }).then((dato)=>{
//     console.log(dato)
// })
// .catch((err)=>{
//     console.error(err)
// })



// function treardatosApi() {
//   let $tr= document.getElementById('tr');

 
//   return new Promise((res, rej) => {
//     res(
//       fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then(
//         (datos) => {
//           datos.json().then((datos) => {
//             for (let i in datos) {
//               let $td = document.createElement('td')
//               $td.textContent = datos[i]["email"]
//               $tr.appendChild($td)
//             }

//            ;
//           });
//         }
//       )
//     );
//   });
// }

// treardatosApi();
