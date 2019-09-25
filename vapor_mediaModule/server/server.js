const express = require('express');
const app = express();
const db = require('../db');
const help = require('../help');
const port = 3002;
app.use(express.static('public'));

app.get('/games/:uid', (req, res) => {
  var uid = req.params.uid;
  db.findGamebyId(uid, (err, game) => {
    if(err) {
      console.error(err);
      res.status(404);
    } else {
      res.status(200);
      res.send(game);
    }
  });
});

app.get('/screenshots', (req, res) => {
  db.findScreenshots((err, screenshots) => {
    if (err) {
      console.error(err);
      res.status(500);
    } else {

      res.status(200);
      res.send(screenshots);
    }
  })
});

app.get('/videos', (req, res) => {
  // send back video info from helper file (hardcoded)
  // this data should be on the database either on a separate videos table or on the games table
  res.status(200);
  res.send(help.getVideosFromAws());
});

app.listen(port, (req, res) => {
  console.log('Listening to ' + port + '!');
});

