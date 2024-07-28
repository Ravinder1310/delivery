import express from 'express';
const router = express.Router();
import { addFunds, deductFunds, getTransactions } from '../controllers/walletController.js';
import auth from '../middleware/auth.js';

router.post('/add', auth, addFunds);
router.post('/deduct', auth, deductFunds);
router.get('/transactions', auth, getTransactions);

export default router;
