const express = require("express");

//
const app = express();

// proceso de peticiones => texto, json, form
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// envio de datos desde el cliente => servidor
app.post("/user", (req, res) => {
  res.send("new user create");
});

// cfg sv
app.listen(3000);
console.log("sv on port 3000");
