// ts no comprende el tipo de dato y lo autocompleta con "ANY"
let myStringVar;
let myStringVar2 = "1"; // string
let myIntVar3 = 5; // number

// Si establecemos que la variable es "STRING" si o si debemos colocarle un valor
let string: string = "jeje";
console.log(string);

// undefined => por defecto no tiene definicion la variable
let und: undefined = undefined;

// boolearn =>
let bool: boolean = true;

// ------------> functions ------------->

// void => las funciones de tipo void no pueden retornar nada al ser de tipo vacia
function names(): void {}

//
function names2(name: string): string {
  return `hi ${name}`;
}

// arrow function ts
const nombre = (name: string): string => {
  return `hi ${name}`;
};

//
let myName: (name: string) => void;
myName = (name) => {
  console.log(name);
};
myName("hi");

//
