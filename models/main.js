//================Depenedencies================//
const mongoose = require('mongoose')

//================Schema================//
const movieSchema = new mongoose.Schema({
    title: String,
    genre: [String],
    image: String,
    rating: Number,
    cast: [String]
})

const Movie = mongoose.model('Movie', movieSchema)

//================Export================//
module.exports = Movie
