const express = require("express");
const app = express();
const PORT = 3000;

//ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to my website");
});

app.listen(PORT, () => {
  console.log(`sv running on port ${PORT}🚀`);
});
