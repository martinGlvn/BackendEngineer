const express = require("express");
const app = express();
const PORT = 8080;

// middleware => static content
app.use(express.static("public"));

// routes
app.get("/hi", (req, res) => {
  res.send("Hi");
});

app.get("*", (req, res) => {
  res.send("404 | Page not found");
});

app.listen(PORT, () => {
  console.log("running sv");
});
