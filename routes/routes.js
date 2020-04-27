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

  if (!city) {
    location((error, data) => {
      if (error) {
        return res.status(500).send({ error: "No se pudo obtener la ubicacion" });
      }
      current(data.city, (error, data) => {
        if (error) {
          return res.status(500).send({ error: "No se pudo obtener el pronostico" })
        }
        return res.send(data)
      });
    })
  } else {
    current(city, (error, data) => {
      if (error) {
        return res.status(400).send({ error: "Ciudad no encontrada" })
      }
      return res.send(data)
    });
  }

});

router.get("/forecast/:city?", function (req, res) {
  const city = req.params.city;

  if (!city) {
    location((error, data) => {
      if (error) {
        return res.status(500).send({ error: "No se pudo obtener la ubicacion" });
      }
      forecast(data.city, (error, data) => {
        if (error) {
          return res.status(500).send({ error: "No se pudo obtener el pronostico" })
        }
        return res.send(data)
      });
    })
  } else {
    forecast(city, (error, data) => {
      if (error) {
        return res.status(400).send({ error: "Ciudad no encontrada" })
      }
      return res.send(data)
    });
  }
});

router.get("*", function (req, res) {
  return res.send("Invalid endpoint", 404);
});

module.exports = router;
