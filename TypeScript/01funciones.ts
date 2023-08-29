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

// void => no devuelve nada pero se termina de ejecutar...
