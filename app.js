if (process.env.NODE_ENV === 'development') require('dotenv').config()

const cors = require('cors')
const express = require('express')
const app = express()

require('./config/mongodb')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', require('./routes'))
app.use(require('./middlewares/error-handler'))

module.exports = app
