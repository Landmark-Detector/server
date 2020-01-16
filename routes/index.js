const router = require('express').Router()
const userController = require('../controllers/user-controller')
const pictureController = require('../controllers/picture-controller')
const upload = require('../middlewares/upload')
const TwitterController = require('../controllers/twitter-controller')

router.get('/', function(req, res, next) {
  res.json({ message: 'Server alive' })
})
router.get('/picture', pictureController)
router.post('/picture', upload.single('file'), pictureController.upload)
router.post('/user/login', userController)
router.get('/request-token', TwitterController.requestToken)
router.get('/parse-token', TwitterController.parseToken)
router.get('/get-user', TwitterController.getUser)

module.exports = router
