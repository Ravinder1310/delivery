import Order from '../models/order.js';

export const createOrder = async (req, res) => {
    try {
        const { courierPartner, trackingNumber, pickupAddress, deliveryAddress, codAmount, shipmentCost } = req.body;
        const newOrder = new Order({
            user: req.user.id,
            courierPartner,
            trackingNumber,
            pickupAddress,
            deliveryAddress,
            codAmount,
            shipmentCost,
        });
        await newOrder.save();
        res.status(201).json({ message: 'Order created successfully', newOrder });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
