const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});

app.get("/contact", function (req, res) {
  res.send("<h1>Contact me at: brandon@gmail.com</h1>");
});

app.get("/about", function (req, res) {
  res.send("Hi, my name is Brandon Hernandez and I like to code!");
});

app.get("/hobbies", function (req, res) {
  res.send("I like F1 and Golf");
});
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
