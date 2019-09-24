const request = require('supertest');
const app = require('../server/index.js');

describe('GET /players', function() {
  it('respond with json containing a list of all players', function(done) {
    request(app)
      .get('/players')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
