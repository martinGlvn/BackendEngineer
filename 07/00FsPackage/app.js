// module fs=>
const fs = require("fs");

// leer contenido de archivo => "Sincrono"
const data = fs.readFileSync("./data.txt", "utf-8");
console.log(data);

// Crear archivo => "sincrono"
const newData = `Contenido nuevo del archivo. Este contenido = "${data}" viene de "data.txt" creado en ${Date.now()}`;
fs.writeFileSync("./newFile.txt", newData);

//leer contenido de archivo => "Asincrono"
fs.readFile("./data.txt", (err, data) => {
  if (err) throw err;
  console.log(data);
});
