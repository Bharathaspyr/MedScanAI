import { Router } from 'express';
const router = Router();
import { login, signin, logout } from '../controllers/authController.js';

router.post('/login', login);
router.post('/signin', signin);
router.get('/logout', logout);

export default router;