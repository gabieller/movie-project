require("dotenv").config();
const express = require("express");
const cors = require('cors')

const path = require('path');


const movie = require("./routes/movie");
const popularMovies = require("./routes/popular-movies");
const search = require("./routes/search");


const app = express();

app.use(cors())


app.use(express.static("public"));


app.use("/api/movie", movie);
app.use("/api/popular-movies", popularMovies);
app.use("/api/search", search);



app.use((res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

const port = process.env.PORT || 3000;

app.listen(port);
