const express = require("express");
const app = express();
const PORT = 3000;

// first method
app.get("/", (req, res) => {
  res.send("Welcome my website");
});

app.listen(PORT, () => {
  console.log(`website listening on port: ${PORT}`);
});
