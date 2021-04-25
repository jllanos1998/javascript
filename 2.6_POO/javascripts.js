


// class Vehiculos{
//     constructor(marca,modelo,color,precio){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.color = color;
//         this.precio = precio;
//     }
//     mostrarInformacion(){
//         return `${this.marca} ${this.modelo} ${this.color}
//         ${this.precio} `
//     }

// }

// // const Nissan = new Vehiculos();
// // Nissan.mostrarInformacion()

// class Camion extends Vehiculos{
//     constructor(marca,modelo,color,precio,descripcion){
//         super(marca,modelo,color,precio)
//         this.descripcion = descripcion;

//     }
//     mostrarInformacion(){
//         return ` ${super.mostrarInformacion()} ${this.descripcion}
//         `
//     }
// }

// const camion1 = new Camion('citroen','sata','negro',1500000,'MOTOR PARA ANDAR POR TODO EL MUNDO');

// console.log(camion1.mostrarInformacion());

//Metodos estaticos
// class Persona{
//     constructor(nombre,apellido,edad){
//         this.nombre =nombre;
//         this.apellido =apellido;
//         this.edad =edad;
//     }
//      informacion(){
//          return `Soy la persona mas feliz programando`
//      }
    
//      get getnombre(){
//          return this.nombre
//      }

//      set setnombre(nombre){
//         this.nombre = nombre
//      }
// }

// const jaime = new Persona('jaime','apellido','edad');
// jaime.setnombre = 'matias'
// console.log(jaime.getnombre)
