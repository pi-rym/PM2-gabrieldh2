const tempData = require('./tempData')





let createCards = function(data){ 
  
  const contentMovies = document.getElementById('content-movies')
  
  let arr = data.map(movie => {
  const cards = document.createElement('div')
  const img = document.createElement('img')
  const title = document.createElement('h3')
  const text = document.createElement('p')
  const duration = document.createElement('div')
  const rate = document.createElement('p')


  img.src = movie.poster
  title.innerHTML = movie.title
  rate.innerHTML = movie.rate
  duration.innerHTML = movie.duration 



  title.classList.add('title-movie')
  img.classList.add('img-movie')
  duration.classList.add('duration-movie')
  rate.classList.add('rate-movie')
  text.classList.add('title-movie')
  cards.classList.add('cards-movies')


  cards.appendChild(img)
  cards.appendChild(title)
  cards.appendChild(duration)
  cards.appendChild(rate)

  return cards

})


return arr.forEach(element => {
  contentMovies.appendChild(element)
});

} 

let createSliders = function(data){ 
  
  const contentSlider = document.getElementById('content-slider')
  
  let slider = data.map(movie => {
  const cards = document.createElement('div')
  const textSide = document.createElement('div')
  const img = document.createElement('img')
  const title = document.createElement('h3')
  const text = document.createElement('p')
  const duration = document.createElement('div')
  const rate = document.createElement('p')
  const card = document.createElement('div')



  img.src = movie.poster
  title.innerHTML = movie.title
  rate.innerHTML = movie.rate
  duration.innerHTML = movie.duration 



  title.classList.add('title-slider')
  img.classList.add('img-slider')
  duration.classList.add('duration-slider')
  rate.classList.add('rate-slider')
  text.classList.add('title-slider')
  cards.classList.add('cards-slider')
  card.classList.add('card-slider')
  

  
  textSide.appendChild(title)
  textSide.appendChild(duration)
  textSide.appendChild(rate)
  card.appendChild(img)
  card.appendChild(textSide)
  cards.appendChild(card)


  cards.style.backgroundImage =  `url(${movie.poster})`

  return cards

})


return slider.forEach(element => {
  contentSlider.appendChild(element)
});

} 

const url = 'https://students-api.up.railway.app/movies';

$.ajax({
  url: url,
  method: 'GET',
  dataType: 'json',
  success: function(response) {
    const arr = response
    createCards(arr)
  },
  error: function(xhr, status, error) {
      // Manejar errores
  }
});



createSliders(tempData)
























