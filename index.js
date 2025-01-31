const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/mars") {
    res.end("This page is for Mars url");
  } else if (req.url === "/flowers") {
    res.end("This page is for Folwers url");
  } else {
    res.end("Assalamu Alaikum, the server has started!");
  }
});

server.listen(8000, "localhost", () => {
  console.log("Server is started!");
});
