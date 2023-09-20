import { Schema, model } from "mongoose";

const CommentSchema = new Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    blog: {type: mongoose.Schema.Types.ObjectId, ref: 'Blogs', required: true },
    body: {type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}
)

const Comments = model("Comments", CommentSchema);
export default Comments;