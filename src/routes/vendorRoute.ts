import { Router } from 'express';
import { addVendor } from '../controllers/auth';
const router = Router();

router.post('/', addVendor);

export default router;
