const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Assalamu Alaikum, the server has started!");
});

server.listen(8000, "localhost", () => {
  console.log("Server is started!");
});
