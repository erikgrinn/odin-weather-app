//https://www.world-wonders-api.org/v0/docs

const titleDiv = document.querySelector('#title')
const imgDiv = document.querySelector('img')
const descDiv = document.querySelector('#description')



// URL (required), options (optional)
fetch('https://www.world-wonders-api.org/v0/wonders/random', {mode: 'cors'})
  .then(function(response) {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Successful response :)
    return response.json()
  })
  .then(function(data) {
    titleDiv.textContent = data.name
    imgDiv.setAttribute('src', data.links.images[0])
    descDiv.textContent = data.summary
  })
  .catch(function(err) {
    // Error :(
    console.log('err')
  });