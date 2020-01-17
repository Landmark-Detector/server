const mongoose = require('mongoose')
const mongodb_uri =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/default'

mongoose
  .connect(mongodb_uri, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('conneced to db'))
  .catch(() => console.log('failed to connect to db'))
