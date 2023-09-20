import { Schema, model } from "mongoose";

const BlogSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  images: [{ type: String }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Blogs = model("Blogs", BlogSchema);
export default Blogs;
