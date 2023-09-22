import express from 'express';
const router = express.Router();
import {blogHome, createBlog, updateBlog, deleteBlog} from '../controllers/blogControllers.js';
import auth from '../middleware/auth.js';
import upload from '../config/multer.js';

router.get('/', blogHome);
router.post('/createBlog', auth, upload.single('file'), createBlog);
router.put('/updateBlog', auth, updateBlog);
router.delete('/deleteBlog',auth, deleteBlog);

export default router; 