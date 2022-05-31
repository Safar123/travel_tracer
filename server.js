const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'})

const app = require('./app');
const dbConnectFunc= require('./config/database');
dbConnectFunc();
const port = process.env.PORT;
const dMode = process.env.DEV_MODE;

app.listen(port, ()=>{
    console.log(`Server running on port ${port} in ${dMode} mode`);
})