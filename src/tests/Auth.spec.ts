import chai, { expect } from "chai";
import chaiHTTP from "chai-http";
import app from "../app";

chai.use(chaiHTTP);
chai.should();

export default () => {
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
  });
};
