import express from "express";
import morgan from "morgan";
import cors from "cors";

// init sv
class ServerBootstrap {
  public app: express.Application = express();
  private port: number = 8000;

  // init variables
  constructor() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
    this.app.use(cors());

    // routes =>
    this.app.get("/api/hola", (req, res) => {
      res.status(400).json({ message: "hello world" });
    });

    this.listen();
  }

  //
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`sv listen on port ${this.port}`);
    });
  }

  //
}

new ServerBootstrap();
