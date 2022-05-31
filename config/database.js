const mongoose = require('mongoose');

const dbConnectFunc =()=>{
    mongoose.connect(process.env.DATABASE_STRING).then((data)=>{
        console.log(`Database connected successfully as ${data.connection.host}`)
    }).catch((err)=>{
        console.log(err)
    })
}


module.exports= dbConnectFunc;