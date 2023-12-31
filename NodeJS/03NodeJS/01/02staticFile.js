const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 5000;

// middleware =>
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // leer req.body

// GET => info viaja por url
// app.get("/formulario", (req, res) => {
//   res.send("formulario enviado " + req.query.nombre);
//   console.log(req.query);
// });

// POST => info viaja por body
app.post("/formulario", (req, res) => {
  const { nombre, apellido } = req.body;
  if (!nombre || !apellido) return res.redirect("/error.html");
  fs.writeFileSync(`${nombre}.txt`, apellido, (err) => {
    if (err) return res.send("fail");
    res.send("se creo el archivo");
  });
  res.send("formulario enviado " + req.body.nombre);
  console.log(req.body.nombre);
});

//
app.listen(PORT, () => {
  console.log(`🚀sv listening on port:${PORT}🚀`);
});
