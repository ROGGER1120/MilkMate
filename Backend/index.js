const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/Milkmate'
mongoose.connect(MONGO_URI).then(() => {
  console.log('MongoDB connected')
}).catch((err) => {
  console.error('MongoDB connection error', err)
  process.exit(1)
})

app.get('/health', (req, res) => {
  res.json({ ok: true })
})

app.use('/api/auth', require('./routes/auth'))
app.use('/api/admin', require('./routes/admin'))
app.use('/api/seller', require('./routes/seller'))
app.use('/api/partner', require('./routes/partner'))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`MilkMate API running on :${PORT}`))


