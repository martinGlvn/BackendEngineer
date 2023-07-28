// Callback Hellp =>
// cuando tenemos una anidación excesiva de callbacks causa que el código sea difícil
// de leer y mantener, lo que lleva a una estructura complicada y poco clara.

let misViajes = [];

setTimeout(() => {
  misViajes.push("arg");
  console.log(misViajes);
  setTimeout(() => {
    misViajes.push("Paris");
    console.log(misViajes);
    setTimeout(() => {
      misViajes.push("chile");
      console.log(misViajes);
    }, 1000);
  }, 1000);
}, 1000);
