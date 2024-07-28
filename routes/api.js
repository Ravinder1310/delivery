import express from 'express';
const router = express.Router();
import { trackShipment } from '../controllers/apiController.js';

router.post('/track', trackShipment);

export default router;
