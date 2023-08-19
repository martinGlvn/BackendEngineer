import "dotenv/config";
import "./database/connectdb.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";

//
const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  console.log("hi");
});

app.listen(PORT, () => {
  console.log("");
});
