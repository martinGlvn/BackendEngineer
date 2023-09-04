// Clases => Plantilla de objetos

class Persona {
  constructor(nombre, edad, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.altura = altura;
    this.dinero = "$5000";
  }
  // metodo = funcion
  saludo() {
    return `hi ${this.nombre}`;
  }
}

const Martin = new Persona("martin", 10, 50);
console.log(Martin);
