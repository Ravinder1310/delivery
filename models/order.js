import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    courierPartner: {
        type: String,
        required: true
    },
    trackingNumber: {
        type: String,
        required: true
    },
    pickupAddress: {
        type: String,
        required: true
    },
    deliveryAddress: {
        type: String,
        required: true
    },
    codAmount: {
        type: Number
    },
    shipmentCost: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model('Order', OrderSchema);

export default Order;
