const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Assalamu Alaikum from the server!");
});

app.listen(8000, () => {
  console.log("Server is running now!");
});
