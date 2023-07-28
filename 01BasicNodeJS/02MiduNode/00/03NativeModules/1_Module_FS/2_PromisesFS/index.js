const fs = require("node:fs/promises");

console.log("Read First File");
//
fs.readFile("./tst.txt", "utf-8").then((text) => {
  console.log("First text", text);
});

console.log("Read Second File");
//
fs.readFile("./tst.txt", "utf-8").then((text) => {
  console.log("Second text", text);
});
