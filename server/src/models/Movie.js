const mongoose = require("mongoose");

const Movie = mongoose.model('Movie', {
     title: String,
     imdbID : String,
     poster : String,
     year : String,
      type:String 
});

module.exports = Movie;