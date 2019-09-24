const request = require("supertest");
const app = require("../server/index.js");
const iconv = require("iconv-lite");
const encodings = require("iconv-lite/encodings");
iconv.encodings = encodings;

describe("GET /steam1", function() {
  it("responds with json data", function(done) {
    request(app)
      .get("/steam1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
