// Las aserciones en ts le aseguran al compilador que tiene un tipo específico, es decir
// si el compilador no puede deducir automáticamente el tipo forzamos el mismo.

// ej1 =>
let valor: any = "esto es una cadena";
let longitudCadena: number = (valor as string).length;

// ej2 con error en tiempo de ejecucion => si no encuentra el elemento falla nuestro programa
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const c1 = canvas.getContext("2d");

// ej2 sin error => Forma correcta de realizar una acersion
const canvas2 = document.getElementById("canvas");
if (canvas2 instanceof HTMLCanvasElement) {
  // validamos que canvas2 sea un HTMLCanvasElement
  const c2 = canvas2.getContext("2d");
}
