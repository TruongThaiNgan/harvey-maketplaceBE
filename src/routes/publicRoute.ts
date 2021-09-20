import { Router } from 'express';
import { getHomePage, getListProduct, getPage, getPageProduct, getProductByName } from '../controllers/product';
const router = Router();

router.get('/product', getPageProduct);
router.get('/product/:productName', getProductByName);
router.get('/home-page', getHomePage);
router.get('/list-product', getListProduct);
router.get('/accessories', getPage);
router.get('/computers', getPage);
router.get('/camerasPhotos', getPage);
router.get('/mobilesTablets', getPage);
router.get('/tvAudio', getPage);
router.get('/consoleGame', getPage);
router.get('/gadgets', getPage);
router.get('/toolsStorage', getPage);
router.get('/watches', getPage);
router.get('/latest', getPage);


export default router;
