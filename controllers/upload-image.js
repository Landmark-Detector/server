class UploadImage {
  static upload(req, res, next) {
    res.json(req.body)
  }
}

module.exports = UploadImage
