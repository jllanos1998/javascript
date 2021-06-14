
// // // const $cards = document.querySelector('.cards');
// // // const $card = document.createElement('div');
// // // const $figure = document.createElement('figure');
// // // const $img = document.createElement('img');
// // // const $texto = document.createTextNode('Nature');
// // // const $figcaption = document.createElement('figcaption');
// // // let clonar ;

// // // $img.setAttribute('src','https://placeimg.com/250/250/nature')
// // // $img.setAttribute('alt','Nature')
// // // $figcaption.appendChild($texto)
// // // $figure.appendChild($img)
// // // $figure.appendChild($figcaption)
// // // $card.appendChild($figure)
// // // $card.classList.add('card');
// // // $cards.appendChild($card);

// // // // $card.innerHTML = `
// // // //     <figure>
// // // //         <img src="https://placeimg.com/250/250/animal" alt="animal">
// // // //         <figcaption>AZAR</figcaption>
// // // //     </figure>

// // // // `
// // // // $cards.insertBefore($card,$cards.children[0]) //Insertamos antes de un elemento.

// // // // $cards.removeChild($cards.children[0]) //Eliminamos un elemento del dom 

// // // const $mylist = document.getElementById('mylist');
// // // const $itemtext = document.createTextNode('chile');
// // // const $list = document.createElement('li');
// // // const $lista2 = document.getElementById('lista2');

// // // $list.appendChild($itemtext);

// // // $mylist.insertBefore($list,$mylist.children[1]);

// // // const $template = document.getElementById('template').content;
// // // const $cards = document.getElementById('cards') 
// // // $template.querySelector('.card');
// // // $template.querySelector('figure');
// // // $template.querySelector('img');


// // // let clone = document.importNode($template,true);

// // // $cards.appendChild(clone)

// // const $cards = document.getElementById('cards');
// // const $newFigure = document.createElement('figure');
// // const $card = document.createElement('div');
// // $card.classList.add('card')
// // let $contentCard = `
// //     <img src="https://placeimg.com/250/250/animal" alt="animal">
// //     <figcaption id="figcaption"></figcaption>
// // `
// // $card.appendChild($newFigure);
// // // $cards.insertAdjacentElement("beforebegin",$card) // Hermano Anterior
// // // $cards.insertAdjacentElement("afterbegin",$card)// Primero Hijo.
// // // $cards.insertAdjacentElement("beforeend",$card)// ultimo Hijo.
// // // $cards.insertAdjacentElement("afterend",$card)// Siguiente Hermano.
// // $newFigure.insertAdjacentHTML("afterbegin",$contentCard)
// // console.log($newFigure)
// // $newFigure.querySelector('figcaption').insertAdjacentText('beforeend','animales')
// // // $cards.insertAdjacentElement('afterbegin',$card)

// // // $cards.prepend($card)//Lo agrega al hijo inicio.
// // // $cards.append($card)//Lo agrega al hijo final.
// // // $cards.before($card)//Hermano anterior
// // // $cards.after($card)//Siguiente hermano


// // const $button = document.getElementById('button')

// // $button.addEventListener('click',()=>{
// //     agregarCards();
// // })



// // const nombre = ['any','people','tech','nature'];
// // let random = Math.round(Math.random()*4)
// // console.log(random)
// // function agregarCards(){
// //     //variables
// //     const $card = document.createElement('div');
// //     const $figure = document.createElement('figure');
// //     const $img = document.createElement('img');
// //     const $figcaption = document.createElement('figcaption');
// //     const $body = document.body;
// //     //estilos
// //     $card.classList.add('card');
// //     $img.setAttribute('src',`https://placeimg.com/200/200/${nombre[random]}`);
// //     $img.setAttribute('alt','any');
// //     $figcaption.insertAdjacentText("beforeend",`${nombre[random]}`);
// //     $figure.insertAdjacentElement("afterbegin",$img);
// //     $figure.insertAdjacentElement("beforeend",$figcaption);
// //     $card.insertAdjacentElement('afterbegin',$figure);
// //     $body.insertAdjacentElement("beforeend",$card);
// // }

// /*DOM*/
// // function holamundo(){
// //     alert("Hola mundo")
// //     console.log(event.type)
// //     console.log(event.target)
// // }

// // const $eventoSemantico = document.getElementById('evento-semantico');
// // const $eventomultiple = document.getElementById('evento-multiple');
// // const remover = (e)=>{
// //     $eventoSemantico.addEventListener('dblclick',())
// // }
// // $eventomultiple.addEventListener('click',holamundo)


// // const $div = document.querySelectorAll('div');

// // function flujoEventos(e){
// //     console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`)
// //     e.stopPropagation()
// // }
// // $div.forEach((ele)=>{
// //     ele.addEventListener('click',flujoEventos,true,true)
// // })


// /* Delegacion de Eventos */
// // document.addEventListener('click',(e)=>{
// //     console.log(e.target)
// //     if(e.target.matches("#lista2")){
// //         console.log('Soy una lista')
// //     }
// // })


// /* Eventos */
// // resize : ridencionamiento de la ventana de windows.
// // Scroll
// // load : cuando la ventana del navegador haya terminado de cargar.
// // DOMContentLoaded:
// // window.addEventListener('resize',(e)=>{
// //     if(window.innerWidth <= 320){

// //         document.body.style.backgroundColor = "red"
// //     }else if(window.innerWidth >= 320 || window.innerWidth <= 600){
// //         document.body.classList.add('body')
// //     }
    
// //     else{
// //         document.body.style.backgroundColor = "white"

// //     }
// //     console.log(window.innerWidth) //Tamaño del ancho del viewport de nuestra Ventana
// //     console.log(window.innerHeight) //Tamaño del alto del viewport de nuestra ventana.
// //     console.log(window.outerWidth)// Resolucion en la que tengo el monitor.
// //     console.log(window.outerHeight)
// //     console.log(e)

// // })

// // window.addEventListener('scroll',()=>{

// //     console.log(scrollY)
// //     console.log(scrollX)
// // })

// // window.addEventListener('load',(e)=>{
// //     console.clear();
// //     console.log("**********Evento Load***********")
// //     console.log(screenX)
// //     console.log(screenY)
// //     console.log(e)
// // })

// //Metodos Del BOM.

// // window.alert()//alerta
// // window.confirm('Confirmacion')
// // window.prompt() //input
// // window.open(url)Abrir ventana
// // window.close() cerrar ventana
// // window.print() Imprimir


// // console.log("**********Objeto URL (location)**********")
// // console.log(location)
// // console.log(location.origin)
// // console.log(location.protocol)
// // console.log(location.host)
// // console.log(location.hostname)
// // console.log(location.port)
// // console.log(location.href)
// // console.log(location.hash)
// // console.log(location.search)
// // console.log(location.pathname)
// // // location.reload()

// console.log("********** Objeto Historial")
// // console.log(history) //Cuantas pagina yo he visitado
// // history.back() // retrocede
// // history.forward() // Hacia adelante
// // history.go()Paginas hacia adelante + y pagina hacia atras negativo

// console.log("******** objeto navigator ********")

// console.log(navigator.connection)
// console.log(navigator.geolocation)
// console.log(navigator.mediaDevices)
// console.log(navigator.mimeTypes)
// console.log(navigator.onLine)
// // console.log(navigator.serviceWorker) aplicacion instalable
// console.log(navigator.storage) //Api Almacenamiento
// console.log(navigator.usb)
// console.log(navigator.userAgent)