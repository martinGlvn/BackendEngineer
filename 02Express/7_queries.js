const express = require("express");

//
const app = express();

//
app.get("/hello/:user", (req, res) => {
  console.log(req.params.user);
  res.send(`hi ${req.params.user}`);
});
//
app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  res.send(`sum of x + y is ${parseInt(x) + parseInt(y)}`);
});
//
app.get("/users/:username/photo", (req, res) => {
  if (req.params.username === "martin") {
    return res.sendFile("./me2.jpg", { root: __dirname });
  }
  res.send("not found");
});

// cfg sv
app.listen(3000);
console.log("sv on port 3000");
