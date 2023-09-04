// inferencia en functions =>

function saludar(name: string) {
  console.log(`hi ${name}`);
}

saludar("hi"); // ✅
// saludar(5);  ❌

// arrow fucntions =>
const sumar = (a: number, b: number): number => {
  return a + b;
};

// never => funciones que no devuelven nada y no se termina de ejecutar...
function throwError(message: string): never {
  throw new Error(message);
}

// void => void si se termina de ejecutar aunque la funcion no devuelva nada
function throwError2(message: string): void {
  throw new Error(message);
}

// ts realiza inferencia en la funcion "forEach" para saber que es una cadena de texto.
const heroes = ["batman", "spiderman"];
heroes.forEach((hero) => {
  console.log(hero.toUpperCase());
});
