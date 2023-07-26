const path = require("path");

// unit urls
const filePath = path.join("content", "subfolder", "iam.txt");
console.log(filePath);

// get basename
const base = path.basename(filePath);
console.log(base);

// delete extension url
const filename = path.basename("content/subfolder/iam.txt", ".txt");
console.log(filename);

// get extension url
const extension = path.extname(filePath);
console.log(extension);
