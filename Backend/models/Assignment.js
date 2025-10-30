const mongoose = require('mongoose')

const AssignmentSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  partnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['assigned', 'picked', 'delivered', 'failed'], default: 'assigned' },
  etaMinutes: { type: Number, default: 30 },
  route: [{ lat: Number, lng: Number }],
}, { timestamps: true })

module.exports = mongoose.model('Assignment', AssignmentSchema)


