const router = require('express').Router()
const userController = require('../controllers/user-controller')
const TwitterController = require('../controllers/twitter-controller')
const UploadImage = require('../controllers/upload-image')

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
router.post('/user/login', userController)
router.get('/request-token', TwitterController.requestToken)
router.get('/parse-token', TwitterController.parseToken)
router.get('/get-user', TwitterController.getUser)
router.post('/upload/image', uploadImage.single('file'), UploadImage.upload)

module.exports = router
