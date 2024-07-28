import express from 'express';
const router = express.Router();
import { createOrder, getUserOrders } from '../controllers/orderController.js';
import auth from '../middleware/auth.js';

router.post('/create', auth, createOrder);
router.get('/my-orders', auth, getUserOrders);

export default router;
