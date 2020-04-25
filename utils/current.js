const axios = require("axios");

const current = async function (city, callback) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5e7c3e011b0d69313f88f7feb194959b`;

  try {
    const response = await axios.get(url);
    callback(undefined, response.data);
  } catch (error) {
    callback(error, undefined);
  }
};

module.exports = current