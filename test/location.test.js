const request = require("supertest");
const should = require("should");
const app = require("../app");

describe("location test", () => {
  it("devuelve status 200 con JSON valido", (done) => {
    request(app).get("/v1/location")
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        res.body.should.have.property("status").and.be.exactly("success");
        done();
      })
  })
})
