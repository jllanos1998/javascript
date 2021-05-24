'use strict'
const carro={
    modelo:'X002',
    marca:"VMW",
    dicirMiNombre:function(){
        console.log("Hola me llamo"+this.modelo)
    }
}
const {modelo}=carro;
console.log(modelo);
