const express = require("express");
//
const app = express();

//all methods get,post,put,delete =>
app.all("/info", (req, res) => {
  res.send("info");
});

// cfg sv
app.listen(3000);
console.log("sv on port 3000");
