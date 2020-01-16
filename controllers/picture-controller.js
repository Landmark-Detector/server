const pictureModel = require('../model/picture')

class PictureController{
    static upload(req, res, next){
        res.json(req.body)
        // pictureModel.create(req.body)
        // .then((data)=>{

        // })
    }
}

module.exports = PictureController