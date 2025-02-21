const mongoose = require('mongoose');

const FilmSchema = new mongoose.Schema({
    name: String, //Ten phim
    country: String, // Ma QG
    director: String, // Dao dien
    actors: [String], // Dien vien
    description: String, // Descr
    genres: String, // The loai
    publishedYear: Number, // Nam
    avgRate: Number, // Do tuoi
    images: [String], // Anh
    episodes: [{
        number: Number,
        url: String
    }]
});

module.exports = mongoose.model('Film', FilmSchema);