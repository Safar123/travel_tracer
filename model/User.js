const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:[true, 'Please provide valid information'],
        unique:true
    },

    password:{
        type:String,
        required:[true, 'Please password of atleast 8 character']
    },
    confirmPassword:{
        type:String,
        required:[true, 'Confirm Password must match the password']
    },
    email:{
        type:String,
        required:[true, 'Please provide valid email'],
        unique:true,
        trim:true,
        lowercase:true,
        validate:[validator.isEmail, 'Please enter valid email']
    },
    createdAt:{
        type:Date,
        default:Date.now
    },

    role:{
        type:String,
        enum:['user', 'modeator', 'admin', 'super-admin'],
        default:'user'
    }
})

module.exports = mongoose.model('User', userSchema);