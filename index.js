const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Assalamu Alaikum from the server!");
});

app.get("/mars", (req, res) => {
  res.send("Hi, this is from mars.");
});

app.get("/flowers", (req, res) => {
  res.send("Hi, this is from flowers.");
});

app.listen(8000, () => {
  console.log("Server is running now!");
});
