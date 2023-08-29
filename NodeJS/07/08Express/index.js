const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello", data: [] });
});
app.post("/", (req, res) => {
  res.status(200).json({ message: "Hello", data: [] });
});
app.get("/home", (req, res) => {
  res.status(200).json({ message: "Hello", data: [] });
});

app.listen(PORT, () => {
  console.log(`sv running on port ${PORT}`);
});
