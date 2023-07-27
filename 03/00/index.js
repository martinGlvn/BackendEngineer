console.clear();
import createExpressServer from "express";

const PORT = 3000;
const expressApp = createExpressServer();

// function get
expressApp.get("/profile/:id", (req, res) => {
  console.log(req.params.id);
  res.send("my account personal");
});

expressApp.listen(3000, () => {
  console.log(`listen port ${PORT}`);
});

// event & listener
