const mongoose = require('mongoose');
var faker = require('faker');

mongoose.connect('mongodb://localhost/players', {
  useNewUrlParser: true
});

var playerSchema = mongoose.Schema({
  id: Number,
  language: String,
  recommended: String,
  allowComments: Boolean,
  review: String,
  visibility: String
});

var Player = mongoose.model('player', playerSchema);

// var files = [];

// for (var i = 0; i < 100; i++) {
//   var userName = faker.internet.userName();
//   var avatar = faker.internet.avatar();
//   var language = faker.random.arrayElement([
//     'English',
//     'Chinese',
//     'Spanish',
//     'Italian',
//     'French',
//     'German'
//   ]);
//   var recommended = faker.random.boolean();
//   var allowComments = faker.random.boolean();
//   var review = faker.random.words();

//   var player = new Player({
//     id: i,
//     userName: userName,
//     avatar: avatar,
//     language: language,
//     recommended: recommended,
//     allowComments: allowComments,
//     review: review
//   });
//   files.push(player.save(player));
// }

// Promise.all(files).then(function() {
//   mongoose.connection.close();
// });

var allPlayers = callback => {
  Player.find((err, docs) => {
    if (err) {
    } else {
      callback(null, docs);
    }
  }).limit(100);
};

var postReview = review => {
  var player = new Player(review);
  player.save(player, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log('DB posted:');
    }
  });
};

module.exports.allPlayers = allPlayers;
module.exports.postReview = postReview;
