const {Schema, models, model} = require('mongoose')

const PictureSchema = new Schema({
    url: {type: String, require: true},
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    description: {type: String},
    lat: {type: Number},
    lang: {type: Number}
})

const Picture = model('Picture', PictureSchema)

module.exports = Picture