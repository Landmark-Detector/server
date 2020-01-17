const pictureModel = require('../model/picture')
const { ImageAnnotatorClient } = require('@google-cloud/vision')
const client = new ImageAnnotatorClient({
  keyFilename: process.env.KEY_FILENAME,
})

class PictureController {
  static upload(req, res, next) {
    // res.json(req.body)
    const pictureName = req.body.file.split('googleapis.com/')[1]
    console.log(pictureName)
    res.json(pictureName)
  }
}

module.exports = PictureController
