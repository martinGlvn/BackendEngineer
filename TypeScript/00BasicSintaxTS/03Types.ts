// Types => Template Union Types, Union Types...

// ej1 =>
type HexadecimalColor = `#${string}`;
// const color: HexadecimalColor = "343434";  ❌
const color2: HexadecimalColor = "#343434"; // ✅

// ej2 =>
type HeroId = `${string}-${string}-${string}-${string}-${string}`;

type Hero2 = {
  readonly id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean; // PROPIEDAD OPCIONAL
};

let hero: Hero2 = {
  //   id: "hi", ❌
  id: crypto.randomUUID(), // ✅
  name: "batman",
  age: 25,
};

// Union Types =>
type ModelEnergy = "batery" | "fuel" | "oil";

type Cars = {
  name: string;
  model: string;
  isActive?: boolean; // PROPIEDAD OPCIONAL
  energyModel: ModelEnergy;
};

let car: Cars = {
  name: "audi",
  model: "rs2",
  energyModel: "batery",
};

// Types Indexing =>

// Return Type =>
function Createmovie() {
  return {
    title: "1",
    director: "2",
  };
}
type Movie = ReturnType<typeof Createmovie>;
