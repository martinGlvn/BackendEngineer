console.clear();
import { createServer } from "http";

// event & listener
const httpServer = createServer((req, res) => {
  console.log("receiv req");
  res.end("receiv");
});

httpServer.listen(3000);
