require("dotenv").config();
import mongoose from "mongoose";
import config from "../config";

export default async () => {
  try {
    mongoose.connect(
      `mongodb://${config.db.host}:${config.db.port}/${config.db.database}`,
      {
        user: config.db.user,
        pass: config.db.pass,
        authSource: config.db.authSource,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );

    // To fix all deprecation warnings
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useUnifiedTopology", true);

    mongoose.connection.on("connected", () => {
      console.log("Database connection established");
    });

    mongoose.connection.on("error", (e) => {
      console.log("Database connection error:", e);
    });
  } catch (e) {
    console.log("Database connection error:", e);
  }
};
