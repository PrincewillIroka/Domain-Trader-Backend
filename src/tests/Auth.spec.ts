import chai, { expect } from "chai";
import chaiHTTP from "chai-http";
import app from "../app";
import database from "../database";

chai.use(chaiHTTP);
chai.should();

export default () => {
  const userData = {
    email: "test@gmail.com",
    password: "1234567890",
  };

  describe("Auth", () => {
    describe("GET /", () => {
      it("should return welcome message", (done) => {
        chai
          .request(app)
          .get("/")
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have
              .property("message")
              .eql("Welcome to Domain Trader Backend");
            done();
          });
      });
    });

    describe("POST /api/auth/signUp", () => {
      before(async () => {
        await database.connect();
      });

      it("should create a trader", (done) => {
        chai
          .request(app)
          .post("/api/auth/signUp")
          .send(userData)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("success").eql(true);
            done();
          });
      });

      after(async () => {
        await database.disconnect();
      });
    });
  });

  describe("POST /api/auth/login", () => {
    before(async () => {
      await database.connect();
    });

    it("should create a trader", (done) => {
      chai
        .request(app)
        .post("/api/auth/login")
        .send(userData)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("success").eql(true);
          done();
        });
    });

    after(async () => {
      await database.disconnect();
    });
  });
};
