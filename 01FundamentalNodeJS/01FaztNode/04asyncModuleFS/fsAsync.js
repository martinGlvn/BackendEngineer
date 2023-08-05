const fs = require("fs");

// Async Code
fs.readFile("./hi.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data);
});
