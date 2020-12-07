import { array } from "@hapi/joi";
import chai, { expect } from "chai";
import chaiHTTP from "chai-http";
import app from "../app";
import database from "../database";
import { IDomainsForSale } from "../types/interfaces";

chai.use(chaiHTTP);
chai.should();

export default () => {
  describe("Trader", () => {
    describe("GET /api/trader/getDomainsForSale", () => {
      before(async () => {
        await database.connect();
      });

      it("should return array of domains for sale", (done) => {
        const domainsForSaleData: IDomainsForSale = { limit: 5, pageNumber: 0 };
        chai
          .request(app)
          .get("/api/trader/getDomainsForSale")
          .send(domainsForSaleData)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("success").eql(true);
            res.body.should.have.property("payload").to.be.an("array");
            done();
          });
      });

      after(async () => {
        await database.disconnect();
      });
    });
  });
};
