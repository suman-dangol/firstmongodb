import mongoose from "mongoose";
const { Schema } = mongoose;

//schema: table ko lagi structure

const blogSchema = new Schema({
  title: String,
  description: String,
});

//
const blogModel = mongoose.model("blogs", blogSchema); //blogs vaneko chai hamro table ho jun chai maile mongodb ma banako xu

export default blogModel;
