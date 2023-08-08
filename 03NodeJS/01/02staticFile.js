const express = require("express");
const app = express();
const PORT = 5000;

//GET =>
app.get("/", (req, res) => {
  res.send("welcome");
});
app.get("/martin", (req, res) => {
  res.send("welcome");
});

app.listen(PORT, () => {
  console.log(`🚀sv listening on port:${PORT}🚀`);
});
