const User = require('../model/User');

exports.getAllUser = async(req, res)=>{

    const allUsers = await User.find();

    if(!allUsers || allUsers.length===0){

        return res.status(200).json({
            success:true,
            message:'No user has signup yet'
        })
    }

    res.status(200).json({
        success:true,
        data:{
            users:allUsers
        }
    })
}
