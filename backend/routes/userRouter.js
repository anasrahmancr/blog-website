import express from 'express';
const router = express.Router();
import {getRegister, registerUser, loginData, loginPage} from '../controllers/userControllers.js';

// Signup
router.get('/getRegister', getRegister);
router.post('/register', registerUser);

// Login
router.get('/', loginPage);
router.post('/login', loginData);


export default router;