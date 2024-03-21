const {Router} = require('express')
const {movies} = require('../controllers/controllerMovies')
const {cartelMovies} = require('../controllers/moviesController')
const { crearNuevaPelicula } = require('../controllers/createMoviesController');
const { validarDatos } = require('../middlewares/validateData');


const rutas = Router();

rutas.get('/movies2', movies)
rutas.get('/movies', cartelMovies)
rutas.post('/movies', validarDatos ,crearNuevaPelicula);

module.exports = {rutas}