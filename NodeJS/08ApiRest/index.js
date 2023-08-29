import "dotenv/config";
import "./database/connectdb.js";
import express from "express";
import authRouter from "./routes/auth.route.js";

//
const app = express();

// Lectura de solicitudes => JSON
app.use(express.json());
// routes -> middleware
app.use("/api/v1/", authRouter); //auth.route

//
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("2- sv running on PORT", +PORT);
});
