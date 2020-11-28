import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Methods, Credentials"
  );
  next();
});

app.use("/api", routes);

app.get("/", function (req, res) {
  res.status(200).json({ message: "Welcome to Domain Trader Backend" });
});

app.use(function (req, res) {
  res.status(404).json({ message: "Sorry, page not found" });
});

export default app;
