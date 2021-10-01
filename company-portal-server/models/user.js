const mongoose = require("mongoose")
const Joi = require('joi')
const jwt = require("jsonwebtoken")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    },
    department :{
        type : String
    },
    address : {
        type: String
    },
    imgUrl : {
        type : String
    }
    ,
    isAdmin: Boolean,
    // roles: [],
    // operations: []
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, name: this.name }, 'portail_jwtPrivateKey' )
    return token
}

const User = mongoose.model('User', userSchema)

function validateUser(user) {
    const schema = {
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
        address :Joi.String().required(),
        imgUrl : Joi.String(),
        department : Joi.String()
    }
    return Joi.validate(user, schema);
}

exports.User = User
exports.validate = validateUser