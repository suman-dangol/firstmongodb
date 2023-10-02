import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blogRouter.js";
import "dotenv/config";
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use("/blog", blogRouter);

app.listen(8000, async () => {
  console.log("Listening on port 8000");

  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
    console.log("Database connection established");
  } catch (e) {
    console.error("Error connecting to the database:", e);
  }
});
