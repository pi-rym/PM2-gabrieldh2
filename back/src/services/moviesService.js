const axios = require('axios')

class Movies{
    constructor(title,year,director,duration,genre,rate,poster){
        if (!title || typeof title !== 'string' || title.trim() === '') {
            throw new Error('El título de la película es obligatorio y debe ser una cadena no vacía.');
          }
          
        
          if (!director || typeof director !== 'string' || director.trim() === '') {
            throw new Error('El nombre del director es obligatorio y debe ser una cadena no vacía.');
          }
      
        
          if (!poster || typeof poster !== 'string' || poster.trim() === '') {
            throw new Error('La URL del póster es obligatoria y debe ser una cadena no vacía.');
          }
      

          this.title = title;
          this.year = year;
          this.director = director;
          this.duration = duration;
          this.genre = genre;
          this.rate = rate;
          this.poster = poster;
        }
}

const peliculas = async ()=>{
    try{
        const url = 'https://students-api.up.railway.app/movies';
    const { data } = await axios.get(url);
    const cartelPeliculas = data.map(element => new Movies(element.title, element.year, element.director, element.duration, element.genre, element.rate, element.poster));
    console.log(cartelPeliculas);
    return cartelPeliculas;
    }catch(error){
        console.log(error)
    }
}


module.exports={peliculas}