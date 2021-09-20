import { Router } from 'express';
import { authFacebook, logIn, putPassword, sendEmailWithAccessToken } from '../controllers/auth';
import { checkAuth } from '../middlewares/checkauth';
const router = Router();

router.post('/', logIn);
router.post('/facebook', authFacebook);
router.post('/access-token', sendEmailWithAccessToken);
router.put('/reset-password', checkAuth, putPassword);

export default router;
