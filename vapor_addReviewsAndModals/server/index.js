const express = require('express');
var app = express();

const db = require('../database/index.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = 3004;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, function() {
    console.log(`Listening in on port: ${PORT}`);
  });
}

app.use(express.static('public'));

app.get('/players', function(req, res) {
  console.log('Sending request to DB');
  db.allPlayers((err, docs) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(200);
      res.send(docs);
    }
  });
});

app.post('/players', (req, res) => {
  var review = req.body;
  db.postReview(review);
  res.end('Success');
});

module.exports = app;