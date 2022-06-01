const express = require('express');
const { getAllTour, getSingleTour, createTour, updateTour, removeTour } = require('../controller/tourController');

const router = express.Router();

router.route('/').get(getAllTour).post(createTour)
router.route('/:id').get(getSingleTour).patch(updateTour).delete(removeTour);


module.exports = router