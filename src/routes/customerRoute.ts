import { Router } from 'express';
import { addCustomer } from '../controllers/auth';

const router = Router();

router.post('/', addCustomer);

export default router;
