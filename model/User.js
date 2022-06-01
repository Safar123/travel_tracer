const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:[true, 'Please provide valid information'],
        unique:true
    },

    password:{
        type:String,
        required:[true, 'Please password of atleast 8 character'],
        select:false,
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

userSchema.pre('save', async function(next){
    if(!this.isModified ('password')) return next();
    this.password= await bcrypt.hash(this.password, 12)
    this.confirmPassword=undefined;

})

module.exports = mongoose.model('User', userSchema);