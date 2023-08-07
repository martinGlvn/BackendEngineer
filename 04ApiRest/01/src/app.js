import express from "express";
import { API_VERSION, PORT } from "./config/config.js";

//
const app = express();
const PORT_APP = PORT || 5000;
const API_PREFIX = "api";

// first method
app.use(`/${API_PREFIX}/${API_VERSION}/alive`, (req, res) => {
  res.json({ ok: true, message: "Api is alive" });
});

app.listen(PORT_APP, () => {
  console.log(
    `website running in enviroment ${process.env.NODE_ENV} on port: ${PORT}`
  );
});
