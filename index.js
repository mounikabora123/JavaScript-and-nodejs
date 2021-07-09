const express = require("express");
const bodyparser = require("body-parser)");
const app = express();
const port = 8080;

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  console.log(Number(req.body.n1) + 5);
  res.send("this is a successful post");
});

app.listen(port);
