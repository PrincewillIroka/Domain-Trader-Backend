import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import routes from "./routes";

dotenv.config({
  path: ".env",
});

const app = express();
const PORT = process.env.PORT || 3080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', routes);


const server = app.listen(PORT, () => {
  console.log(`Server started on port:${PORT}`);
});

export default server
