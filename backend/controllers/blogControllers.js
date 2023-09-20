import User from '../models/User.js';

const blogHome = async(req, res) => {
    try {
        // const blogs = await User.find({blogs});
        // res.status(201).json({blogs})
        res.json({message: "home page"})
    } catch(error) {
        res.status(400).json({message: error.message});
    }
} 

const createBlog = async(req, res) => {
    try {
        console.log(req.body);
        const {title, description} = req.body;
        const image = req.files;
        if(!title || !description || !image){
            res.status(200).json({message: "Fill all the fields"});
        } 
        const userBlog = new User({
            blogs: {
                blogEntrySchema: {
                     title: title,
                     description: description, 
                     image: image
                }
            }
        })
        userBlog.save();
        res.status(200).json({message: "successfully created blog"});
    } catch(error) {
        res.status(400).json({message: error.message});
    }
}

const updateBlog = async(req, res) => {
    try {
        console.log(req.body);
        const {title, description} = req.body;
        const image = req.files.image;
    
        const userBlog = new User({
            blogs: {
                blogEntrySchema: {
                     title: title,
                     description: description, 
                     image: image
                }
            }
        })
        userBlog.save();
        res.status(200).json({message: "successfully updated blog"});
    } catch(error) {
        res.status(400).json({message: error.message});
    }
}

const deleteBlog = async(req, res) => {
    try {
        const id = req.body.id
        await User.findOne({blogs: {blogEntrySchema: {
            _id: id
        }}})
    } catch(error) {
        res.status(400).json({message: error.message});
    }
}




export {blogHome, createBlog, updateBlog, deleteBlog};