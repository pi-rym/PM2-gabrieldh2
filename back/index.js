const connectionDb = require('./src/config/DB')
const { movies } = require('./src/controllers/controllerMovies')
const Movies = require('./src/models/Movies')
const app = require('./src/services/server')
const port = 3500


connectionDb()

Movies.find({})
  .then(peliculasEncontradas => {
    console.log('Películas encontradas:', peliculasEncontradas);
  })
  .catch(error => {
    console.error('Error al buscar películas:', error);
  })




app.listen(port,()=>{
    console.log('esta funcionando')
})
























