
const dataDiv = document.querySelector('#data')
const imgDiv = document.querySelector('img')


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
    console.log(data)
    dataDiv.textContent = data.name
    imgDiv.setAttribute('src', data.links.images[0])
  })
  .catch(function(err) {
    // Error :(
    console.log('err')
  });