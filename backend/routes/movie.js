const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const url = `${process.env.BASE_URL}/movie/${id}?api_key=${process.env.API_KEY}`;


  axios
    .get(url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(error.response.status).send(error.response.data);
    });
});

module.exports = router;
