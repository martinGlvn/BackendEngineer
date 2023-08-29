const fs = require("fs");

// leer Archivo
const first = fs.readFileSync("./hi.txt", "utf-8");
console.log(first);

// lear archivo sin parsear el formato a utf -8
const key = fs.readFileSync("./key.txt");
console.log(key.toString());

// Crear archivo
fs.writeFileSync("./test.txt", "testing create & write file");

//almacenar contenido de una variable a un txt
const myVariable = "Hi martin";
fs.writeFileSync("./test2.txt", myVariable);
