// Los genericos son la forma de especificar el tipo de dato que tiene x parametro
// una funcion, clase, etc..

// Genericos Funciones =>
function primerElemento<T>(array: T[]): T | undefined {
  return array[0];
}
const numeros = [1, 2, 3];
const letras = ["a", "b", "c"];
console.log(primerElemento(numeros)); // 1
console.log(primerElemento(letras)); // "a"

// Genericos Clases =>
class Contenedor<T> {
  private valor: T;

  constructor(valor: T) {
    this.valor = valor;
  }

  obtenerValor(): T {
    return this.valor;
  }
}
const contenedorDeNumero = new Contenedor(42);
const contenedorDeTexto = new Contenedor("Hola, Mundo");
console.log(contenedorDeNumero.obtenerValor()); // 42
console.log(contenedorDeTexto.obtenerValor()); // "Hola, Mundo"

// Genericos Interfaces =>
interface Par<T, U> {
  primero: T;
  segundo: U;
}
const parDeNumeros: Par<number, string> = { primero: 1, segundo: "dos" };
const parDeStrings: Par<string, boolean> = { primero: "hola", segundo: true };
