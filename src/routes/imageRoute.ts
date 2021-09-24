import { Router } from 'express';
import { getImage } from '../controllers/images';
const router = Router();

router.get('/:image', getImage);

export default router;
