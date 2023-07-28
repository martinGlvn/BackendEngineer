console.clear();
import express from "express";

const PORT = 3000;
const expressApp = express();

expressApp.use(express.json());
expressApp.use(express.text());

// function get
expressApp.get("/profile/:id", (req, res) => {
  res.send();
});

expressApp.listen(3000, () => {
  console.log(`listen port ${PORT}`);
});

// event & listener
