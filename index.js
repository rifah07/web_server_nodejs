const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  // file read from here
  fs.readFile("./data.txt", "utf-8", (err, data) => {
    if (err) {
      res.send("There is an error to accessing the data file!");
    }
    res.send(data);
  });
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
