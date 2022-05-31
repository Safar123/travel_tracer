const mongoose = require ('mongoose');

const tourSchema = new mongoose.Schema({

    name:{
        type:String,
        unique:true,
        required:[true, 'Please enter unique name for tour']
    },

    summary:{
        type:String,
        required:[true, 'Please provide overview of tour'],
        maxlength:[200, 'Summary must be 200 character less']

    },

    description:{
        type:String,
        required:[true, 'Please provide tour description'],
        minlength: [20, 'Tour description must be longer than 20 character']
    },
    
    duration:{
        type:Number,
        required:[true, 'Please provide valid tour duration']
    },

    maxGroupSize:{
        type:Number,
        required:[true, 'Please provide max number of people in one tour']
    },

    price:{
        type:Number,
        required:[true, 'Please provide price for the tour.']
    },

    coverImage:{
        type:String
    },

    images:{
        type:[String]
    },

    difficulty:{
        type:String,
        required:[true, 'Choose valid difficulty level'],
        enum:['easy', 'hard', 'challenging', 'extreme']
    }, 
    startDates:{
        type:[Date]
    }

})


module.exports = mongoose.model('Tour', tourSchema);