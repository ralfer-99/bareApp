const Weather = require('../models/Weather');
const { fetchWeatherData } = require('../services/weatherService');

exports.getWeatherData = async (req, res) => {
  try {
    const { userId, date } = req.query;
    const weatherData = await Weather.find({ userId, date });
    res.status(200).json(weatherData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.sendWeatherReport = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);
    const weatherData = await fetchWeatherData(user.location.coordinates);
    await Weather.create({ userId, ...weatherData });

    // Send email with weather report
    await sendEmail(user.email, weatherData);

    res.status(200).json({ message: 'Weather report sent successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};