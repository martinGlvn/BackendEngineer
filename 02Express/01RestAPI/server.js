const express = require("express");
const morgan = require("morgan");

//
const app = express();
let products = [
  {
    id: 1,
    name: "pc",
    price: "$5000",
  },
];

//middlewares
app.use(morgan("dev"));
app.use(express.json());

// Methods
app.get("/products", (req, res) => {
  res.json(products);
});
app.post("/products", (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.send("create products");
});
app.put("/products/:id", (req, res) => {
  const newData = req.body; //{}
  const productFound = products.find((p) => p.id === parseInt(req.params.id));
  if (!productFound)
    return res.status(404).json({ message: "productNotFound" });

  products = productFound.map((p) =>
    p.id === parseInt(req.params.id) ? { ...p, ...newData } : p
  );
  res.json({
    message: "product update",
  });
});
app.delete("/products/:id", (req, res) => {
  const productFound = products.find((p) => p.id === parseInt(req.params.id));
  if (!productFound)
    return res.status(404).json({ message: "productNotFound" });
  products = products.filter((p) => p.id !== parseInt(req.params.id));
  res.sendStatus(204);
});
app.get("/products/:id", (req, res) => {
  const productFound = products.find((p) => p.id === parseInt(req.params.id));
  if (!productFound)
    return res.status(404).json({ message: "productNotFound" });
  res.json(productFound);
});

//
app.listen(3000);
console.log(`sv port ${3000}`);
