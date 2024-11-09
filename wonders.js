
const dataDiv = document.querySelector('#data')
const imgDiv = document.querySelector('img')


// URL (required), options (optional)
fetch('https://www.world-wonders-api.org/v0/wonders/', {mode: 'cors'})
  .then(function(response) {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Successful response :)
    return response.json()
  })
  .then(function(data) {
    dataDiv.textContent = data[0].name
    imgDiv.setAttribute('src', data[0].links.images[0])
  })
  .catch(function(err) {
    // Error :(
    console.log('err')
  });