import dotenv from "dotenv";
import app from "./app";
import database from "./database";

dotenv.config({
  path: ".env",
});

const PORT = process.env.PORT || 3080;

const server = app.listen(PORT, async () => {
  await database.connect();
  console.log(`Server started on port:${PORT}`);
});

export default server;
