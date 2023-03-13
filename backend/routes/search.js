const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", async (req, res) => {
  const query = req.query.query;

  try {
    const response = await axios.get(`${process.env.API_SEARCH_URL}${query}`);
    console.log(response);
    // res.send(response.data.results);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

module.exports = router;
