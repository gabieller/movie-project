const express = require('express')
const bodyParser = require('body-parser')

const movie = require('./routes/movie')

const app = express()


app.use('/api/movie', movie)

app.listen(3000)