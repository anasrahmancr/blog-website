import express from 'express';
const router = express.Router();
import {blogHome, createBlog, updateBlog, deleteBlog} from '../controllers/blogControllers.js';

router.get('/', blogHome);
router.post('/createBlog', createBlog);
router.put('/updateBlog', updateBlog);
router.delete('/deleteBlog', deleteBlog);

export default router;