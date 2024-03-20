const { crearPelicula } = require('../services/crearService');

async function crearNuevaPelicula(req, res) {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    
    try {
        const nuevaPelicula = await crearPelicula({ title, year, director, duration, genre, rate, poster });
        res.status(201).json({ message: 'Película creada correctamente', pelicula: nuevaPelicula });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la película' });
    }
}

module.exports = { crearNuevaPelicula };
