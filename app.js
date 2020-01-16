if(process.env.NODE_ENV === 'development') require ('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routes/index')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)

mongoose.connect(process.env.MONGOOSE, {useCreateIndex: true, useUnifiedTopology:true, useNewUrlParser:true})

app.listen(process.env.PORT, ()=>{
    console.log(`server running on port ${process.env.PORT}`)
})