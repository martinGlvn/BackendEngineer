const express = require("express");
const app = express();
const PORT = 5000;

// middleware =>
app.use(express.static("public"));

// GET =>
app.get("/formulario", (req, res) => {
  res.send("formulario enviado " + req.query.nombre);
  console.log(req.query);
});

app.listen(PORT, () => {
  console.log(`🚀sv listening on port:${PORT}🚀`);
});
