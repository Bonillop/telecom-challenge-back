const express = require("express");
const router = express.Router();
const location = require("../utils/location");
const current = require("../utils/current");
const forecast = require("../utils/forecast");

router.get("/location", function (req, res) {
  location((error, data) => {
    if (error) {
      return res.send(error)
    }
    return res.send(data)
  });
});

router.get("/current/:city?", function (req, res) {
  const city = req.params.city;
  //City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según
  //ip-api y el estado del tiempo actual.

  if (!city) {
    location((error, data) => {
      if (error) {
        return res.send(error);
      }
      current(data.city, (error, data) => {
        if (error) {
          return res.send(error)
        }
        return res.send(data)
      });
    })
  } else {
    current(city, (error, data) => {
      if (error) {
        return res.send(error)
      }
      return res.send(data)
    });
  }

});

router.get("/forecast/:city?", function (req, res) {
  const city = req.params.city;
  //City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según
  //ip-api y el estado del tiempo a 5 dias.

  if (!city) {
    location((error, data) => {
      if (error) {
        return res.send(error);
      }
      forecast(data.city, (error, data) => {
        if (error) {
          return res.send(error)
        }
        return res.send(data)
      });
    })
  } else {
    forecast(city, (error, data) => {
      if (error) {
        return res.send(error)
      }
      return res.send(data)
    });
  }
});

module.exports = router;
