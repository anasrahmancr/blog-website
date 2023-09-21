import express from 'express';
const router = express.Router();
import {blogHome, createBlog, updateBlog, deleteBlog} from '../controllers/blogControllers.js';
import auth from '../middleware/auth.js';

router.get('/', auth, blogHome);
router.post('/createBlog', auth, createBlog);
router.put('/updateBlog', auth, updateBlog);
router.delete('/deleteBlog',auth, deleteBlog);

export default router;