const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    movie_name: String,
    movie_disc: String,
    image: String,
    movie_ratings: String
})

const MyMovieDB = mongoose.model("movieTbl", movieSchema);

module.exports = MyMovieDB