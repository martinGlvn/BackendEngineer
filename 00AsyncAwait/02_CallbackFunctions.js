// Funciones callbacks => funciones que son pasadas como argumento
// a otras funciones de orden superior.

let getUserById = (id, cb) => {
  const user = {
    id,
    name: "martin",
  };
  setTimeout(() => {
    cb(user);
  }, 2000);
};

getUserById(3, (martin) => {
  console.log(martin);
});
