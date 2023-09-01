// arrays - objets - tuplas - promise - compuestos

// Arrays =>
const names1: string[] = [];
const names3: Array<string> = [];

// Objects =>
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

// Promesas =>
const promise = async (): Promise<string> => {
  return await new Promise((res, _rej) => {
    setTimeout(() => {
      res("hi");
    }, 2000);
  });
};
promise().then((r) => console.log(r));

// Compuestos =>
const objeto5: {
  name: string;
  age: number;
} = {
  age: 28,
  name: "martin",
};
