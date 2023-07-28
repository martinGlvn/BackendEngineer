// Temporizadores => no se ejecutan al momento de ser invocados

// setTimeout => se ejecuta una vez con el tiempo definido
setTimeout(() => {
  console.log("async");
}, 1000);

// setInterval => se ejecuta repetidamente cada x tiempo
setInterval(() => {
  console.log("async");
}, 1000);
