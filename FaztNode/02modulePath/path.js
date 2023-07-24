const path = require("path");

// funcion join que une las datos formando una url
const filePath = path.join("marta", "documents", "profile.png");
console.log(filePath);

// funcion basename para obtener el archivo final de nuestra url
console.log(path.basename(filePath));

// funcion para obtener el directorio
console.log(path.dirname(filePath));

// funcion para obtener todos los datos de la url en formato de objeto
console.log(path.parse(filePath));

// funcion para obtener el directorio de una carpeta especifica
console.log(path.resolve("jejeje"));
