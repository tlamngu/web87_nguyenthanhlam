const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const filmRepository = require('./repositories/film.repository');

const app = express();
const PORT = 5000; // chay o port 5000 cho server

app.use(cors()); // cho phep truy cap tu moi cors
app.use(bodyParser.json()); // Parse json request body

// Ket noi toi db
mongoose.connect('mongodb://127.0.0.1:27017/web87', { // doi thanh cai dia chi connect neu cua thay khac =))
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

//API lay top 10 phim, /films/top-10
app.get('/films/top-10', async (req, res) => {
    try {
        let top10Films = await filmRepository.getTop10RatedFilms();
        res.json(top10Films);
    } catch (error) {
        console.error('Error fetching top 10 films:', error);
        res.status(500).json({ message: 'Error fetching films' });
    }
});
// api lay so phim co trong kho
app.get('/films/count', async (req, res) => {
    try {
        let filmCount = await filmRepository.countAllFilms();
        res.json({ count: filmCount });
    } catch (error) {
        console.error('Error counting films:', error);
        res.status(500).json({ message: 'Error counting films' });
    }
});
// api lay phim theo nam
app.get('/films/year/:year', async (req, res) => {
    try {
        let year = parseInt(req.params.year);
        let filmsByYear = await filmRepository.findFilmsByPublishedYear(year);
        res.json(filmsByYear);
    } catch (error) {
        console.error('Error fetching films by year:', error);
        res.status(500).json({ message: 'Error fetching films' });
    }
});
// api lay ohim theo qg
app.get('/films/country/:country', async (req, res) => {
    try {
        let country = req.params.country;
        let filmsByCountry = await filmRepository.findFilmsByCountry(country);
        res.json(filmsByCountry);
    } catch (error) {
        console.error('Error fetching films by ciuntry:', error);
        res.status(500).json({ message: 'Error fetching films' });
    }
});
// lay phim theo dien vien
app.get('/films/actor/:actorName', async (req, res) => {
    try {
        let actorName = req.params.actorName;
        let filmsByActor = await filmRepository.findFilmsByActor(actorName);
        // console.log(filmsByActor)
        res.json(filmsByActor);
    } catch (error) {
        console.error('Error fetching gilms by actor:', error);
        res.status(500).json({ message: 'Error fetching film' });
    }
});
//lay phim theo keyword
app.get('/films/name-keyword/:keyword', async (req, res) => {
    try {
        let keyword = req.params.keyword;
        let filmsByNameKeyword = await filmRepository.findFilmsByNameKeyword(keyword);
        // console.log(filmsByNameKeyword)
        
        res.json(filmsByNameKeyword);
    } catch (error) {
        console.error('Error fetching films by name keyword:', error);
        res.status(500).json({ message: 'Error fetching film' });
    }
});

//lay phim theo so tap

app.get('/films/episodes-range/:min/:max', async (req, res) => {
    try {
        let minEpisodes = parseInt(req.params.min);
        let maxEpisodes = parseInt(req.params.max);
        let filmsByEpisodeRange = await filmRepository.findFilmsByEpisodeCountRange(minEpisodes, maxEpisodes);
        res.json(filmsByEpisodeRange);
    } catch (error) {
        console.error('Error fetching films by episoe range:', error);
        res.status(500).json({ message: 'Error fetching film' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
