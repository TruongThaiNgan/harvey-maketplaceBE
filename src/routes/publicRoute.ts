import { Router } from 'express';
import {
  getHomePage,
  getListProduct,
  getPageAccessories,
  getPageProduct,
  getProductByName,
} from '../controllers/product';
const router = Router();

router.get('/product', getPageProduct);
router.get('/accessories', getPageAccessories);
router.get('/product/:productName', getProductByName);
router.get('/home-page', getHomePage);
router.get('/list-product', getListProduct);

export default router;
