const express = require("express");
const app = express();
const PORT = 3000;

const people = [{ name: "martin" }, { name: "juan" }, { name: "juliana" }];

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/api/people", (req, res) => {
  res.send({ people: people });
});

app.get("/api/people/person1", (req, res) => {
  res.send({ people: people[0].name });
});

app.listen(PORT, () => {
  console.log(`app listening on port : ${PORT}`);
});
