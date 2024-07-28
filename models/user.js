import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    walletBalance: {
        type: Number,
        default: 0
    },
    walletTransactions: [
        {
            amount: Number,
            type: {
                type: String,
                enum: ['credit', 'debit']
            },
            description: String,
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

const User = mongoose.model('User', UserSchema);

export default User;
