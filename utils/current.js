const axios = require("axios");

const current = async function (city, callback) {
  const apiKey = process.env.OPEN_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    callback(undefined, response.data);
  } catch (error) {
    callback(error, undefined);
  }
};

module.exports = current