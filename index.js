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

app.get("/write", (req, res) => {
  fs.writeFile("./data.txt", "Dhalia", (err) => {
    if (err) {
      res.send("Error writting in file");
    }
    res.send("Data written successifully!");
  });
});

app.get("/append", (req, res) => {
  fs.appendFile("./data.txt", "\nRose", (err) => {
    if (err) {
      res.send("Error writting in file");
    }
    res.send("Data added successifully!");
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
