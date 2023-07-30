const express = require("express");

//
const app = express();

// function middleware => .use
app.use((req, res, next) => {
  console.log(`Route : ${req.url} Method: ${req.method}`);
  next();
});
// function middleware auth => .use
app.use((req, res, next) => {
  if (req.query.login === "martin") {
    next();
  } else {
    res.send("no auth");
  }
});
// dashboard
app.get("/dashboard", (req, res) => {
  res.send("Dashboard Page");
});
// method get
app.get("/profile", (req, res) => {
  res.send("profile");
});

// cfg sv
app.listen(3000);
console.log("sv on port 3000");
