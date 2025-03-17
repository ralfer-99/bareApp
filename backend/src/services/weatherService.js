const axios = require('axios');

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

exports.fetchWeatherData = async (coordinates) => {
  const [longitude, latitude] = coordinates;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHER_API_KEY}`;

  const response = await axios.get(url);
  const { main, weather } = response.data;

  return {
    temperature: main.temp,
    description: weather[0].description,
    city: response.data.name, // City name from OpenWeatherMap
  };
};