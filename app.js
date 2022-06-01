const express = require('express');
const app = express();

app.use(express.json());

//routes declaration
const tourRoute = require('./routes/tourRoutes');
const userRoute = require('./routes/userRoutes');



//route initialization
app.use('/api/v1/tours', tourRoute );
app.use('/api/v1/users', userRoute);

module.exports = app;