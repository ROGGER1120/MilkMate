const mongoose = require('mongoose')

const WalletTransactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['credit', 'debit'], required: true },
  amount: { type: Number, required: true },
  description: { type: String },
  balanceAfter: { type: Number, default: 0 },
}, { timestamps: true })

module.exports = mongoose.model('WalletTransaction', WalletTransactionSchema)


