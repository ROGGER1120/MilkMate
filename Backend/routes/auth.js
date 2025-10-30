const router = require('express').Router()
const jwt = require('jsonwebtoken')
const User = require('../models/User')

router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role, phone } = req.body
    if (!name || !email || !password || !role) return res.status(400).json({ error: 'Missing fields' })
    const exists = await User.findOne({ email })
    if (exists) return res.status(409).json({ error: 'Email already in use' })
    const user = new User({ name, email, role, phone, passwordHash: 'temp' })
    await user.setPassword(password)
    await user.save()
    return res.status(201).json({ id: user._id })
  } catch (e) {
    return res.status(500).json({ error: 'Server error' })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) return res.status(401).json({ error: 'Invalid credentials' })
    const ok = await user.comparePassword(password)
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' })
    const token = jwt.sign({ id: user._id, role: user.role, name: user.name }, process.env.JWT_SECRET || 'dev_secret', { expiresIn: '7d' })
    return res.json({ token, role: user.role, name: user.name })
  } catch (e) {
    return res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router


