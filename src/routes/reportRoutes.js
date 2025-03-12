import { Router } from 'express';
const router = Router();
import { createReport } from '../controllers/reportController.js';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('image'), createReport);

export default router;