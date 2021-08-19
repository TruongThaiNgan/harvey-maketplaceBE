import { Router } from 'express';
import { addUser } from '../controllers/auth';
const router = Router();

router.post('/', addUser);

export default router;
