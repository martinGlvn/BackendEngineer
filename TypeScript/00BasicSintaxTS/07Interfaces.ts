//Interfaces  => Las interfaces se utilizan para garantizar que los objetos
//cumplan con un contrato o estructura específica.
interface Heroe {
  id: string;
  name: string;
  saludo: () => void;
}
const heroe: Heroe = {
  id: "1",
  name: "batman",
  saludo: () => {
    console.log("hi");
  },
};
