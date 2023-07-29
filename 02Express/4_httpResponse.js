const express = require("express");

const app = express();

// http methods
app.get("/products", (req, res) => {
  res.send("productos");
});
app.get("/archivo", (req, res) => {
  res.sendFile("./me.png", { root: __dirname });
});
app.get("/user", (req, res) => {
  res.json({
    name: "martin",
    lastname: "jeje",
    age: 30,
    address: { city: "jaja", street: "juju" },
  });
});
app.get("/isAlive", (req, res) => {
  res.sendStatus(204);
});

// cfg sv
app.listen(3000);
console.log("sv on port 3000");
