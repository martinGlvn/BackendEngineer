const express = require("express");

const app = express();

// http methods
app.get("/products", (req, res) => {
  res.send("productos");
});
app.post("/products", (req, res) => {
  res.send("creando productos");
});
app.put("/products", (req, res) => {
  res.send("actualizando productos");
});
app.delete("/products", (req, res) => {
  res.send("eliminando productos");
});
app.patch("/products", (req, res) => {
  res.send("actualizando una parte de los productos");
});
// cfg sv
app.listen(3000);
console.log("sv on port 3000");
