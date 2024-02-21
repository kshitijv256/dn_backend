import express, { json } from "express";
import { connect } from "mongoose";
import router from "./routes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 9000;
const MONGO_URI = process.env.DATABASE_URL;

try {
  connect(MONGO_URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log(error);
}

app.use(cors());
app.use(json());
app.use("/api", router);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

export default app;
