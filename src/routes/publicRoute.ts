import { Router } from 'express';
import { getHomePage, getPageAccessories, getPageProduct, getProductByName } from '../controllers/product';
const router = Router();

router.get('/product', getPageProduct);
router.get('/accessories', getPageAccessories);
router.get('/product/:productName', getProductByName);
router.get('/home-page', getHomePage);

export default router;
