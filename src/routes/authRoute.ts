import { Router } from 'express';
import { logIn } from '../controllers/auth';
const router = Router();

router.post('/', logIn);

export default router;
