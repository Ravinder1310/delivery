import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

 // Ensure this is at the top

import userRoutes from './routes/user.js';
import adminRoutes from './routes/admin.js';
import orderRoutes from './routes/order.js';
import apiRoutes from './routes/api.js';
import walletRoutes from './routes/wallet.js';

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
const corsOptions = {
    origin: 'http://localhost:3000', // allow requests from this origin
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// MongoDB Connection
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
    console.error("Error: MONGO_URI is not defined in the environment variables.");
    process.exit(1);
}

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/order', orderRoutes);
app.use('/api', apiRoutes);
app.use('/api/wallet', walletRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
