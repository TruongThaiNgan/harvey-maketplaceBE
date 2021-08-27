import { Router } from 'express';
import { getPageProduct, getProductByName } from '../controllers/product';
const router = Router();

router.get('/product', getPageProduct);
router.get('/product/:productName', getProductByName);

export default router;
