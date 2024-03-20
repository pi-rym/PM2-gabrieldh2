const Movie = require('../models/Movies');

async function crearPelicula(datosPelicula) {
    try {
        const nuevaPelicula = await Movie.create(datosPelicula);
        return nuevaPelicula;
    } catch (error) {
        throw new Error('Error al crear la película');
    }
}

module.exports = { crearPelicula };