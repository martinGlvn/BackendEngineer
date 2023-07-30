const express = require("express");

//
const app = express();

// function middleware => .use
app.use((req, res, next) => {
  console.log(`Route : ${req.url} Method: ${req.method}`);
  next();
});
// method get
app.get("/profile", (req, res) => {
  res.send("profile");
});
// method get2
app.get("/store", (req, res) => {
  res.send("store");
});

// cfg sv
app.listen(3000);
console.log("sv on port 3000");
