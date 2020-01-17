const { Schema, models, model } = require('mongoose')

const UserSchema = new Schema({
    username: {type: String},
    email: {
        type: String,
        validate: {
            validator:(val)=>{
                models.User.findOne({email: val})
                .then((data)=>{
                    if (data === null){
                        return true
                    } 
                    return false
                })
            }, 
            message: props => `${props.value} already use`
        }
    }
})

const User = model('User', UserSchema)


module.exports = User
