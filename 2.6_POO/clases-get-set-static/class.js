class Persona {
static cont = 0;
  constructor(nombre,apellido,edad){
    this.id=++Persona.cont;
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;

  }
  get getId(){
    return this.id;
  }
  get getNombre(){
    return this.nombre;
  }
  set setNombre(nom){
    this.nombre=nom;
  }
 static saludar (){
   return `este es un metodo estatico`;
 }
}
console.log(Persona.saludar());
const juan = new Persona("juan","perez",12); 
juan.setNombre="julia";
console.log(`Nombre:`, juan.getNombre);