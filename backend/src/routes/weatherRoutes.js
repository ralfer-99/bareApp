const express = require('express');
const weatherController = require('../controllers/weatherController');

const router = express.Router();

router.get('/weather', weatherController.getWeatherData);
router.post('/weather/report', weatherController.sendWeatherReport);

module.exports = router;