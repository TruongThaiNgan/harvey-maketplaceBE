import { Router } from 'express';
import { getSaleProduct } from '../controllers/mobile';
const router = Router();

router.get('/product', getSaleProduct);
router.get('/catalog', getSaleProduct);

export default router;
