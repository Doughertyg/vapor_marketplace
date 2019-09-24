const db = require("./db/index.js");
const faker = require("faker");

let data = [];
for (let i = 0; i < 99; i++) {
  data.push({
    id: faker.random.number(),
    hours: faker.random.number(),
    review: faker.lorem.words(),
    title: faker.lorem.word(),
    genre: faker.lorem.word(),
    developer: faker.lorem.words(),
    publisher: faker.company.companyName(),
    published_date: faker.date.recent(),
    recommended: faker.image.avatar(),
    played: faker.image.avatar()
  });
}

db.Game.sync({ force: true, logging: false })
  .then(() => {
    console.log("Game table synced");
  })
  .then(() => {
    db.Game.bulkCreate(data)
      .then(() => {
        return db.Game.findAll();
      })
      .then(data => {
        console.log("SUCCESS", data);
      });
  });
