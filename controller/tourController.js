const Tour = require('../model/Tour');

exports.getAllTour = async(req,res)=>{
    const tourList =  await Tour.find();

    if(!tourList || tourList.length===0){
        return res.status(404).json({
            success:true,
            message:"No tour listed in database yet"
        })
    }

    res.status(200).json({
        success:true,
        data:{
            tours:tourList
        }
    })
}

exports.getSingleTour = async (req, res)=>{
    
    const tourExist = await Tour.findById(req.params.id);
    if(!tourExist){
        return res.status(404).json({
            success:false,
            message:"No tour exist for given ID"
        })
    }

    res.status(200).json({
        success:true,
        data:{
            tourById: tourExist
        }
    })
}

//Admin section


exports.createTour = async(req,res)=>{

    const newTour = await Tour.create(req.body);

    if(!newTour){
        return res.status(500).json({
            success:false,
            message:'Something went wrong creating new tour'
        })
    }

    res.status(201).json({
        success:true,
        data:{
            tour:newTour
        }
    })
}

exports.updateTour = async(req,res)=>{

    let tourId = await Tour.findById(req.params.id);

    if(!tourId){
        return res.status(404).json({
            success:false,
            message:'No such tour exist for provided ID'
        })
    }
 
    tourId = await Tour.findByIdAndUpdate(tourId.id, req.body, {
        new:true, runValidators:true
    })

    res.status(201).json({
        success:true,
        data:{
            updatedTour :tourId
        }
    })

}

exports.removeTour = async (req,res)=>{

    let findTour = await Tour.findById(req.params.id);
    if(!findTour){
        return res.status(404).json({
            success:false,
            message:'Tour not found for given ID'
        })
    }
    
    findTour = await Tour.findByIdAndRemove(findTour.id);

    res.status(200).json({
        success:true,
        message:"Data removed successfully"
    })

}