import { Router } from 'express';
import { authFacebook, logIn } from '../controllers/auth';
const router = Router();

router.post('/', logIn);
router.post('/facebook', authFacebook);

export default router;
