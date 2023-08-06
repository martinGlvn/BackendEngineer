const express = require("express");
const { PORT } = require("./src/config/config");
const app = express();
const PORT_APP = PORT || 5000;

// first method
app.get("/", (req, res) => {
  res.send("Welcome my website");
});

app.listen(PORT_APP, () => {
  console.log(
    `website running in enviroment ${process.env.NODE_ENV} on port: ${PORT}`
  );
});
