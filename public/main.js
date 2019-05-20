const getPictureOfTheDay = () => {
  fetch('https://sdg-astro-api.herokuapp.com/api/Nasa/apod')
    .then(response => {
      return response.json()
    })
    .then(data => {
      let image = document.createElement('img')
      image.src = data.hdUrl
      document
        .querySelector('.image')
        .appendChild(image)
        .classList.add('image-of-the-day')
      document.querySelector('.copyright').textContent = `copyright: ${data.copyright}`
      document.querySelector('.title').textContent = `title: ${data.title}`
    })
}
const getLaunchInfo = () => {
  fetch('https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming')
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data[0].mission_name)
      document.querySelector('.mission-info').textContent = data[0].mission_name
      document.querySelector('.flight-info').textContent = data[0].details
      document.querySelector('.countdown').textContent = data[0].launch_date_utc
      document.querySelector('.launch-location').textContent = data[0].launch_site.site_name_long
    })
}
const next = () => {}

const main = () => {
  getPictureOfTheDay()
  getLaunchInfo()
}

document.addEventListener('DOMContentLoaded', main)
