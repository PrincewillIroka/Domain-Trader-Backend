import authTests from "./Auth.spec";
import traderTests from "./Trader.spec";

describe("Test Runner", () => {
  describe("AuthTests", authTests);
  describe("TraderTests", traderTests);
});
