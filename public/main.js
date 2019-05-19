const getPictureOfTheDay = () => {
  fetch(`https://sdg-astro-api.herokuapp.com/api/Nasa/apod`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data.hdUrl)
    })
}

const main = () => {
  getPictureOfTheDay()
}

document.addEventListener('DOMContentLoaded', main)
