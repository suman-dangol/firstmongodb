import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
const app = express();

app.listen(8000, async () => {
  console.log("Listening on port 8000");

  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
    console.log("Database connection established");
  } catch (e) {
    console.error("Error connecting to the database:", e);
  }
});
