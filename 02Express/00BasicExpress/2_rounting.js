const express = require("express");

const app = express();

// routing
app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/about", (req, res) => {
  res.send("about");
});
app.get("/weather", (req, res) => {
  res.send("the current weather is nice");
});
app.use((req, res) => {
  res.status(404).send("not found page"); //res not exist
});

// cfg sv
app.listen(3000);
console.log("sv on port 3000");
