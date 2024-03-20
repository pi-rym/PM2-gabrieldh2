const { peliculas } = require('../services/moviesService');

const cartelMovies = async (req, res) => {
    try {
        const peli = await peliculas(); // Esperar a que la promesa se resuelva
        res.status(200).json(peli);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener las películas' });
    }
}

module.exports = { cartelMovies };