const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Yay Node!");
});

app.get("/chocolate", function (req, res) {
let searchQuery = req.query.search;
  res.send("Mm chocolate :3" + searchQuery);
});

app.get("/node", function (req, res) {
  res.send("Hello Node!");
});

app.get("/codeyourfuture", function (req, res) {
  res.send("Code Your Future!");
});

app.listen (3000, function () {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});

