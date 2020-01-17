const jwt = require('jsonwebtoken')
const User = require('../model/user')

module.exports = {
  authenticate: function(req, res, next) {
    if (!req.headers.token) {
      return next({ name: 'BadRequest', message: 'Token is missing' })
    }

    try {
      const payload = jwt.verify(req.headers.token, process.env.SECRET)
      User.findOne({ _id: payload.userid }).then(user => {
        if (!user) {
          throw { name: 'BadRequest', message: 'Bad token' }
        }
        req.payload = payload
        next()
      })
    } catch (err) {
      next(err)
    }
  },
}
