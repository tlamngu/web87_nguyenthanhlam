const Film = require('../models/film.model');
const filmRepository = {
    //Dem so phim
    countAllFilms: async () => {
        return Film.countDocuments();
    },
    //Lay 10 bo phim duoc danh gia cao nhat
    getTop10RatedFilms: async () => {
        return Film.find().sort({ avgRate: -1 }).limit(10);
    },
    //Tim phim theo nam sx
    findFilmsByPublishedYear: async (year) => {
        return Film.find({ publishedYear: year });
    
    },
    // tim phim theo qg
    findFilmsByCountry: async (country) => {
        return Film.find({ country: country });
    },


    //tim phim bang dien vien
    findFilmsByActor: async (actorName) => {
        return Film.find({ actors: actorName });
    
    },

    //tim pjim theo ten
    findFilmsByNameKeyword: async (keyword) => {

        const regex = new RegExp(keyword, 'i');
        return Film.find({ name: regex });
    },

    //tim theo khoang so tap (> 5, <10 as example)
    findFilmsByEpisodeCountRange: async (minEpisodes, maxEpisodes) => {
        return Film.find({
            $expr: {
                $and: [
                    { $gte: [{ $size: "$episodes" }, minEpisodes] },
                    { $lte: [{ $size: "$episodes" }, maxEpisodes] }
                ]
            }
        });
    }
};
module.exports = filmRepository;