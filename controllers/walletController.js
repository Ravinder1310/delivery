import User from '../models/user.js';

export const addFunds = async (req, res) => {
    try {
        const { amount, description } = req.body;
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.walletBalance += amount;
        user.walletTransactions.push({ amount, type: 'credit', description });
        await user.save();

        res.status(200).json({ message: 'Amount added to wallet', walletBalance: user.walletBalance });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deductFunds = async (req, res) => {
    try {
        const { amount, description } = req.body;
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        if (user.walletBalance < amount) {
            return res.status(400).json({ message: 'Insufficient balance' });
        }

        user.walletBalance -= amount;
        user.walletTransactions.push({ amount, type: 'debit', description });
        await user.save();

        res.status(200).json({ message: 'Amount deducted from wallet', walletBalance: user.walletBalance });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getTransactions = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json(user.walletTransactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
