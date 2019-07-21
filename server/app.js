require('dotenv').config({ path: './.env' })
const express = require('express')
const app = express()
const port = process.env.PORT
const NODE_ENV = process.env.NODE_ENV
const route = require('./routes/routes')
const cors = require('cors')
const mongoose = require('mongoose')

const DB = 'mongodb://localhost:27017/xendit'

mongoose.connect(DB + NODE_ENV, { useNewUrlParser: true })
mongoose.set('useFindAndModify', false);

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(route)
app.listen(port, () => {
  console.log(`listening on port: ${port}!`)
})

module.exports = app