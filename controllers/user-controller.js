const userModel = require('../model/user')
const jwt = require('jsonwebtoken')

class UserController{
    static login (req,res,next){
        userModel.findOne({
            email:req.body.email
        })
        .then((data)=>{
            if(data === null){
                return userModel.create(req.body)
            }
            return data
        })
        .then((data)=>{
            let payload = {userid: data._id}
            let token = jwt.sign(payload, process.env.SECRET)
            res.status(200).json({token})
        })
        .catch((err)=>{
            next(err)
        })
    }

}

module.exports = UserController
