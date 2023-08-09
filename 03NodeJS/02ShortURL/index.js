const express = require("express");
const app = express();
const PORT = 5000;

// middlewares =>
app.use(express.static(__dirname + "/public"));

// get =>
app.get("/", (req, res) => {
  res.send("hi");
});

//
app.listen(PORT, (req, res) => {
  console.log();
});
