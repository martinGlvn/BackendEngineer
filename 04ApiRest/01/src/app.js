import express from "express";
import { API_VERSION, PORT } from "./config/config.js";
import cookieParse from "cookie-parser";
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import displayRoutes from "express-routemap";
import corsConfig from "./config/cors.config.js";
import superheoresRoutes from "./routes/superheroes.routes.js";

//
const app = express();
const PORT_APP = PORT || 5000;
const API_PREFIX = "api";

// globals middlewares
app.use(cookieParse());
app.use(hpp());
app.use(helmet());
app.use(cors(corsConfig));

// first method
app.use(`/${API_PREFIX}/${API_VERSION}/alive`, (req, res) => {
  res.json({ ok: true, message: "Api is alive" });
});

//
app.use(`/${API_PREFIX}/${API_VERSION}/superheroes`, superheoresRoutes);

app.listen(PORT_APP, () => {
  displayRoutes(app);
  console.log(
    `website running in enviroment ${process.env.NODE_ENV} on port: ${PORT}`
  );
});
