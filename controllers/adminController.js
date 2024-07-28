import User from '../models/user.js';
import Order from '../models/order.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('user');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
