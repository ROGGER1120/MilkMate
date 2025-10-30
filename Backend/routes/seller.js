const router = require('express').Router()
const { auth } = require('../middleware/auth')
const Product = require('../models/Product')
const Order = require('../models/Order')

router.use(auth(['seller']))

// Products
router.get('/products', async (req, res) => {
  const products = await Product.find({ sellerId: req.user.id })
  res.json(products)
})

router.post('/products', async (req, res) => {
  const product = await Product.create({ ...req.body, sellerId: req.user.id })
  res.status(201).json(product)
})

router.patch('/products/:id', async (req, res) => {
  const p = await Product.findOneAndUpdate({ _id: req.params.id, sellerId: req.user.id }, req.body, { new: true })
  if (!p) return res.status(404).json({ error: 'Not found' })
  res.json(p)
})

router.delete('/products/:id', async (req, res) => {
  const r = await Product.deleteOne({ _id: req.params.id, sellerId: req.user.id })
  res.json({ deleted: r.deletedCount === 1 })
})

// Orders
router.get('/orders', async (req, res) => {
  const orders = await Order.find({ sellerId: req.user.id }).populate('items.productId')
  res.json(orders)
})

router.post('/orders', async (req, res) => {
  const { items, address } = req.body
  const totalAmount = items.reduce((sum, it) => sum + it.price * it.quantity, 0)
  const order = await Order.create({ sellerId: req.user.id, items, address, totalAmount, status: 'pending' })
  res.status(201).json(order)
})

router.patch('/orders/:id/status', async (req, res) => {
  const { status } = req.body
  const allowed = ['pending', 'confirmed', 'assigned', 'out_for_delivery', 'delivered', 'cancelled']
  if (!allowed.includes(status)) return res.status(400).json({ error: 'Invalid status' })
  const order = await Order.findOneAndUpdate({ _id: req.params.id, sellerId: req.user.id }, { status }, { new: true })
  if (!order) return res.status(404).json({ error: 'Not found' })
  res.json(order)
})

module.exports = router


