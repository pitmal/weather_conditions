const express = require('express');
const router = express.Router();
const controller = require('./weather.controller');
const requestLogger = require('../middleware/requestLogger');

// Apply request logger to all routes
router.use(requestLogger);

// GET all weather data
router.get('/', controller.getAllWeather);

// GET one weather record
router.get('/:id', controller.getWeatherById);

// CREATE weather record
router.post('/', controller.createWeather);

// UPDATE weather record
router.put('/:id', controller.updateWeather);

// DELETE weather record
router.delete('/:id', controller.deleteWeather);

module.exports = router;
