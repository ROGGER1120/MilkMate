const router = require('express').Router()
const { auth } = require('../middleware/auth')
const Assignment = require('../models/Assignment')
const Order = require('../models/Order')

router.use(auth(['partner']))

router.get('/assignments', async (req, res) => {
  const list = await Assignment.find({ partnerId: req.user.id }).populate('orderId')
  res.json(list)
})

router.post('/assignments/:id/status', async (req, res) => {
  const { status } = req.body
  const allowed = ['assigned', 'picked', 'delivered', 'failed']
  if (!allowed.includes(status)) return res.status(400).json({ error: 'Invalid status' })
  const a = await Assignment.findOneAndUpdate({ _id: req.params.id, partnerId: req.user.id }, { status }, { new: true })
  if (!a) return res.status(404).json({ error: 'Not found' })
  if (status === 'delivered') await Order.findByIdAndUpdate(a.orderId, { status: 'delivered' })
  res.json(a)
})

router.post('/assignments/:id/route', async (req, res) => {
  const { route, etaMinutes } = req.body
  const a = await Assignment.findOneAndUpdate({ _id: req.params.id, partnerId: req.user.id }, { route, etaMinutes }, { new: true })
  if (!a) return res.status(404).json({ error: 'Not found' })
  res.json(a)
})

module.exports = router


