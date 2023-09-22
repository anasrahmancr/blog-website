import Blogs from "../models/Blogs.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
const key = "secure_key";

const blogHome = async (req, res) => {
  try {
    console.log("inside bloghome");
    const blogs = await Blogs.find();
    console.log(blogs,"blogs");
    return res.json({blogs});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createBlog = async (req, res) => {
  try {
    const token = req.cookies.token;
    const decodedToken = jwt.verify(token, key);
    const { user_id, email } = decodedToken;
    
    const { title, description } = req.body;
    const image = req.file;
    if (!title || !description || !image) {
      return res.status(200).json({ message: "Fill all the fields" });
    }

    const user = await User.findOne({email})
    if(user){
      const userBlog = new Blogs({
        title: title,
        description: description,
        image: image.filename,
        author: user._id,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      })
      userBlog.save();
      res.status(200).json({ message: "successfully created blog" });
  }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    console.log(req.body);
    const { title, description } = req.body;
    const image = req.files.image;

    const userBlog = new User({
      blogs: {
        blogEntrySchema: {
          title: title,
          description: description,
          image: image,
        },
      },
    });
    userBlog.save();
    res.status(200).json({ message: "successfully updated blog" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const id = req.body.id;
    await User.findOne({
      blogs: {
        blogEntrySchema: {
          _id: id,
        },
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { blogHome, createBlog, updateBlog, deleteBlog };
