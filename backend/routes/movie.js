const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=2f1be5c390f5a9e8015f682d396dcf58`;
  
    axios.get(url)
      .then(response => {
        res.send(response.data);
      })
      .catch(error => {
        res.status(error.response.status).send(error.response.data);
      });
  });
module.exports = router;
