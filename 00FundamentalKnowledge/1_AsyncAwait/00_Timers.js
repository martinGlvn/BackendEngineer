// Temporizadores => no se ejecutan al momento de ser invocados

// setTimeout => se ejecuta una vez con el tiempo definido
setTimeout(() => {
  console.log("async");
}, 1000);

// setInterval => se ejecuta repetidamente cada x tiempo
setInterval(() => {
  console.log("async");
}, 1000);

//
const getUserById = (id, callback) => {
  const user = {
    id, //10
    name: "martin",
  };
  setTimeout(() => {
    callback(user);
  }, 1500);
};

getUserById(10, (user) => {
  console.log(user.id);
  console.log(user.name);
});
