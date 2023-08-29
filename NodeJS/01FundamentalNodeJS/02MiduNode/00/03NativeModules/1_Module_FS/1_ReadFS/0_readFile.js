const fs = require("node:fs");

console.log("Read First File");
//
fs.readFile("./tst.txt", "utf-8", (err, txt) => {
  console.log("text", txt);
});

console.log("Read Second File");
//
fs.readFile("./tst.txt", "utf-8", (err, txt) => {
  console.log("text2", txt);
});
