import { Router } from 'express';
import {
  cardPayment,
  check,
  getListPayment,
  ibanPayment,
  addPaymentMethod,
  webhook,
  getInfo,
  postInfo,
  postSetupIntent,
  postInvoice,
  getInvoice,
  postCharge,
} from '../controllers/payment';
import { checkAuth } from '../middlewares/checkauth';
const router = Router();
router.get('/', (req, res)=>res.jsonp({mess: "hello"}));
router.get('/check/:id', check);
router.post('/webhook', webhook);
router.post('/card-payment', cardPayment);
router.post('/iban-payment', ibanPayment);
router.post('/payment-method', checkAuth, addPaymentMethod);

router.get('/list-payment', checkAuth, getListPayment);
router.get('/info', checkAuth, getInfo);
router.post('/info', checkAuth, postInfo);
router.post('/setup-intent', checkAuth, postSetupIntent);

router.post('/invoice', checkAuth, postInvoice);
router.get('/invoice', getInvoice);

router.post('/charge', postCharge);

export default router;
