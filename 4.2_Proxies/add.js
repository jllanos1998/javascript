const persona = {
  nombre: "",
  apellido: "",
  edad: 0
}

const manejador = {
  set(obj, prop, valor) {
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(`La propiedad ${prop} no existe en el objeto persona`);
    }

    if ((prop === "nombre" || prop === "apellido") && !(/^[A-Za-zÑñ]+$/g.test(valor))
    ) {
      return console.error(`La propiedad "${prop}" solo acepta letras y espacios en blanco`);
    }
    obj[prop] = valor;
  }
}

const jon = new Proxy(persona, manejador);

jon.nombre = "Angel";
jon.apellido = "Canonbox";
jon.edad = 25;
jon.correo = "ang4732@gmail.com"
console.log(jon);

console.log(persona);


const persona = {
  nombre: 'juanito',
  edad: 23,
  sexo: 'masculino'
}


/* const manejador = {
  set(obj, prop, valor) {
    obj[prop] = valor;
  }
}


const jaime = new Proxy(persona, manejador)

console.log(jaime) */