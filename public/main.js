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

let index = 0
const getLaunchInfo = () => {
  fetch('https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming')
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data[index].mission_name)
      document.querySelector('.mission-info').textContent = data[index].mission_name
      document.querySelector('.flight-info').textContent = data[index].details
      document.querySelector('.countdown').textContent = data[index].launch_date_utc
      document.querySelector('.launch-location').textContent =
        data[index].launch_site.site_name_long
    })
}
const nextSlide = () => {
  index++
  if (index > 23) {
    index = 0
    getLaunchInfo()
  } else {
    getLaunchInfo()
  }
}
const previousSlide = () => {
  index--
  if (index < 0) {
    index = 23
    getLaunchInfo()
  } else {
    getLaunchInfo()
  }
}

const main = () => {
  getPictureOfTheDay()
  getLaunchInfo()
}
document.querySelector('.right').addEventListener('click', nextSlide)
document.querySelector('.left').addEventListener('click', previousSlide)
document.addEventListener('DOMContentLoaded', main)
