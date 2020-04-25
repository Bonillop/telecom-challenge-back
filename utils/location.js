const axios = require("axios");

const location = async function (callback) {
  const url = "http://ip-api.com/json/";

  try {
    const response = await axios.get(url);
    callback(undefined, response.data)
  } catch (error) {
    callback(error, undefined);
  }
};

module.exports = location