const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  balance: Number
});

module.exports = mongoose.model('Wallet', walletSchema);