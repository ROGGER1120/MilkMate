const router = require('express').Router()
const { auth } = require('../middleware/auth')
const User = require('../models/User')
const Order = require('../models/Order')

router.use(auth(['admin']))

router.get('/stats', async (req, res) => {
  const [sellers, partners, orders] = await Promise.all([
    User.countDocuments({ role: 'seller' }),
    User.countDocuments({ role: 'partner' }),
    Order.countDocuments(),
  ])
  res.json({ sellers, partners, orders })
})

router.get('/users', async (req, res) => {
  const users = await User.find().select('-passwordHash')
  res.json(users)
})

router.patch('/users/:id/toggle', async (req, res) => {
  const user = await User.findById(req.params.id)
  if (!user) return res.status(404).json({ error: 'Not found' })
  user.isActive = !user.isActive
  await user.save()
  res.json({ ok: true, isActive: user.isActive })
})

module.exports = router


