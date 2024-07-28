import express from 'express';
const router = express.Router();
import { getAllUsers, getAllOrders } from '../controllers/adminController.js';
import auth from '../middleware/auth.js';
import adminAuth from '../middleware/adminAuth.js';

router.get('/users', auth, adminAuth, getAllUsers);
router.get('/orders', auth, adminAuth, getAllOrders);

export default router;
