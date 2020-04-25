const request = require("supertest");
const should = require("should");
const app = require("../app");

describe("current test sin parametro city", () => {
  it("devuelve status 200 con JSON valido", (done) => {
    request(app).get("/v1/current")
      .expect(200)
      .expect('Content-Type', /json/, done);
  })
})

describe("current test con parametro city valido", () => {
  it("devuelve status 200 con JSON valido", (done) => {
    const city = "Buenos Aires";
    request(app).get("/v1/current/" + city)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        res.body.should.have.property("name").and.be.exactly(city);
        done();
      })
  })
})

describe("current test con parametro city invalido", () => {
  it("devuelve status 404 con error en el JSON", (done) => {
    const city = "CiudadInexistente";
    request(app).get("/v1/current/" + city)
      .expect(404)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        res.body.should.have.property("name").and.be.exactly("Error");
        done();
      })
  })
})