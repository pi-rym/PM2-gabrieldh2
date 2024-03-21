const connectionDb = require('./src/config/DB')
const { movies } = require('./src/controllers/controllerMovies')
const app = require('./src/services/server')
const port = 3000


app.listen(port,()=>{
    console.log('esta funcionando')
})


connectionDb()























