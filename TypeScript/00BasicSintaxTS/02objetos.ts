let heroes = {
  name: "thor",
  poder: 5005,
};

/*
  En caso de queres modificar o crear una nueva propiedad en ts la inferencia de datos
  no lo permitiria ya que establece parametros y tipos de datos a la hora de la creacion...

*/

// Type Alias ->
type Hero = {
  name: string;
  age: number;
};
// 1
let hero: Hero = {
  name: "batman",
  age: 50,
};
// 2
function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return { name, age };
}

const thor = createHero({ name: "Thor", age: 1500 });

// Optional Properties =>
type Hero2 = {
  name: string;
  age: number;
  isActive?: boolean; // PROPIEDAD OPCIONAL
};
// 1
let hero2: Hero2 = {
  name: "batman",
  age: 50,
};
// 2
function createHero2(hero: Hero2): Hero2 {
  const { name, age } = hero;
  return { name, age };
}

const thor2 = createHero2({ name: "Thor", age: 1500 });
