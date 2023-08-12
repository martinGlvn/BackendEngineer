require("dotenv").config();
const express = require("express");
const expressLayout = require("express-ejs-layouts");
const app = express();
const PORT = 5000 || process.env.PORT;

// Archivos estaticos =>
app.use(express.static("public"));

// Middleware expressLayout =>
app.use(expressLayout);

// Template engine => rutas & renderizacion de vistas con JS
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

//
app.use("/", require("./server/routes/main"));

app.listen(PORT, () => {
  console.log(`${PORT}`);
});
