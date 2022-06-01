const User = require('../model/User');

exports.signUpUser = async(req, res)=>{

    const newUser = await User.create({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        confirmPassword:req.body.confirmPassword
        
    })

    if(!newUser){
        return res.status(500).json({
            success:false,
            message:'Something went wrong !!!!!!!!!!!!'
        })
    }

    res.status(201).json({
        success:true,
        data:{
            user:newUser
        }
    })
}