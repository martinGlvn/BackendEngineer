const { readFile } = require("node:fs/promises");
// IIFE - Inmediatly Invoked Function Expression
(async () => {
  console.log("Read First File");
  const text = await readFile("./tst.txt", "utf-8");
  console.log("First text", text);
  console.log("Read Second File");
  const text2 = await readFile("./tst.txt", "utf-8");
  console.log("Second text", text2);
})();
