const router = require('express').Router()
const userController = require('../controllers/user-controller')
const pictureController = require('../controllers/picture-controller')
const upload = require('../middlewares/upload')


router.get('/picture', pictureController)
router.post('/picture', upload.single('file'),pictureController.upload)
router.post('/user/login', userController.login)

module.exports = router