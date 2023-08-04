const http = require("http");

// port
const desiredPort = 1234;

// sv
const processRequest = (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  if (req.url === "/") {
    res.statusCode = 200;
    res.end("<h1>Welcome to my Website</h1>");
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end("<h1>Contact</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404</h1>");
  }
};

//
const server = http.createServer(processRequest);

// listen sv
server.listen(desiredPort, () => {
  console.log(`sv listen on port ${desiredPort}`);
});
