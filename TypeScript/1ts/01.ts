// arrays - objets - tuplas - promise - compuestos

// Arrays =>
const names1: string[] = [];
const names3: Array<string> = [];

// Objets =>
const myObject: Object = {
  name: "martin",
};

// Records => Nuestro objeto tendra como "KEY" = string y "VALUE" = any
const myObject2: Record<string, any> = {};
myObject2.age = 25;
myObject2.name = "hi";

// Tuplas => Con las tuplas podremos recibir 2 o mas tipos de datos
const myObject3: Record<string, string | number | boolean> = {};
myObject3.age = 25;
myObject3.ageString = "25";
myObject3.ageBool = true;

//
