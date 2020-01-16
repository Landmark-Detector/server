const { ImageAnnotatorClient } = require('@google-cloud/vision')
const client = new ImageAnnotatorClient({
  keyFilename: process.env.KEY_FILENAME,
})

class UploadImage {
  static async upload(req, res, next) {
    const fileName = req.body.file.split('googleapis.com/')[1]

    const [result] = await client.landmarkDetection(`gs://${fileName}`)
    const landmarks = result.landmarkAnnotations
    let landmark = null

    if (landmarks.length === 0) {
      landmark = 'Cant identify landmark'
    } else {
      landmark = {
        location: landmarks[0].locations[0].latLng,
        landmarkName: landmarks[0].description,
        score: landmarks[0].score,
      }
    }

    res.json({ url: req.body.file, landmark })
  }
}

module.exports = UploadImage
