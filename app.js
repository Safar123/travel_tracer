const express = require('express');
const app = express();

app.use(express.json());

//routes declaration
const tourRoute = require('./routes/tourRoutes');



//route initialization
app.use('/api/v1/tours', tourRoute )

module.exports = app;