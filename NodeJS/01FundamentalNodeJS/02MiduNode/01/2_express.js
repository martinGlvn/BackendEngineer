const express = require("express");
const app = express();

const PORT = 1234;

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

app.listen(PORT, () => {
  console.log("sv");
});
