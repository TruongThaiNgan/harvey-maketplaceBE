import { Router } from 'express';
import { getFashionProduct } from '../controllers/fashionShop';
const router = Router();

router.get('/product', getFashionProduct);

export default router;
