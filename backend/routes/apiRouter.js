const express = require("express");
const tmdbClient = require("../clients/tmdbClient");

const router = express.Router();

router.get("/movies/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const movie = await tmdbClient.getMovieById(id);
    return res.json(movie);
  } catch (error) {
    console.log("Failed to load Movie");
    return res.sendStatus(500);
  }
});

router.get("/popular-movies", async (req, res) => {
  try {
    const page = req.params.page;
    const popularMovies = await tmdbClient.getPopularMovies(page | 1);
    res.json(popularMovies);
  } catch (error) {
    console.log("Failed to load popular movies");
    res.sendStatus(500);
  }
});

router.get("/search", async (req, res) => {
  try {
    const query = req.query.query;
    const searchResult = await tmdbClient.searchMovie(query);
    return res.json(searchResult);
  } catch (error) {
    console.log("Failed to load movie");
    return res.sendStatus(500);
  }
});

router.get("/top-rated", async (req, res) => {
  try {
    const page = req.params.page;
    const topRatedMovies = await tmdbClient.getTopRatedMovies(page | 1);
    res.json(topRatedMovies);
  } catch (error) {
    console.log("Failed to load top rated movies");
    res.sendStatus(500);
  }
});

module.exports = router;
