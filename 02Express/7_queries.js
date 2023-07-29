const express = require("express");
//
const app = express();

//Enviamos informacion en la url =>
app.get("/search", (req, res) => {
  if (req.query.q === "js") {
    res.send("books");
  } else {
    res.send("page");
  }
});
//

// cfg sv
app.listen(3000);
console.log("sv on port 3000");
