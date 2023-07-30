const express = require("express");
const morgan = require("morgan");

//
const app = express();
app.use(morgan("dev"));

//
app.get("/products", (req, res) => {
  res.send("get products");
});
app.post("/products", (req, res) => {
  res.send("create products");
});
app.put("/products", (req, res) => {
  res.send("update products");
});
app.delete("/products", (req, res) => {
  res.send("delete products");
});
app.get("/products/:id", (req, res) => {
  res.send("get product");
});

//
app.listen(3000);
console.log(`sv port ${3000}`);
