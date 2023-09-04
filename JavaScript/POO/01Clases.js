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

// Herencia => extension de una clase
class Role extends Persona {
  constructor(nombre, edad, altura) {
    super(nombre, edad, altura);
  }
  roles() {
    return `El ingeniero ${this.nombre} tiene ${this.edad}`;
  }
}
console.log("--------------------");
const rol = new Role("martin", 20, 50);
console.log(rol);
