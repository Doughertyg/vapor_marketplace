const express = require("express");
const parser = require("body-parser");
const app = express();
const port = 3001;
const db = require("../db");

app.use(express.static("./public"));
app.use(parser.json());

app.get("/game", (req, res) => {
  db.getOne(req.body.title, req.body.genre, (err, data) => {
    if (err) {
      console.log("ERROR: ", err);
      res.status(400);
    } else {
      console.log("Server get success!");
      res.status(200);
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;
