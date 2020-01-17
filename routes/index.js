const router = require('express').Router()
const userController = require('../controllers/user-controller')
const TwitterController = require('../controllers/twitter-controller')
const UploadImage = require('../controllers/upload-image')
const { authenticate } = require('../middlewares/auth')

const gcsUpload = require('gcs-upload')
const uploadImage = gcsUpload({
  limits: {
    fileSize: 0.5e7, // in bytes => 5MB
  },
  gcsConfig: {
    keyFilename: process.env.KEY_FILENAME,
    bucketName: process.env.BUCKET_NAME,
  },
})

router.get('/', function(req, res, next) {
  res.json({ message: 'Server alive' })
})
router.post('/user/login', userController.login)
router.get('/request-token', TwitterController.requestToken)
router.get('/parse-token', TwitterController.parseToken)
router.get('/get-user', TwitterController.getUser)
router.post(
  '/upload/image',
  authenticate,
  uploadImage.single('file'),
  UploadImage.upload,
)
router.post('/twitter/upload/image', TwitterController.uploadImage)

module.exports = router
