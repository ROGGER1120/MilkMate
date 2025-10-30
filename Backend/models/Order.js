const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  partnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  }],
  status: { type: String, enum: ['pending', 'confirmed', 'assigned', 'out_for_delivery', 'delivered', 'cancelled'], default: 'pending' },
  address: { type: String },
  totalAmount: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['unpaid', 'paid', 'refunded'], default: 'unpaid' },
}, { timestamps: true })

module.exports = mongoose.model('Order', OrderSchema)


