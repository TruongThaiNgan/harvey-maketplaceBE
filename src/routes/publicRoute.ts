import { Router } from 'express';
import { getProduct } from '../controllers/product';
const router = Router();

router.get('/product', getProduct);

export default router;
