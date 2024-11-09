// this also works by putting link/api directly into img src in html

const imgDiv = document.querySelector('img')

// URL (required), options (optional)
fetch('https://picsum.photos/200/300', {mode: 'cors'})
  .then(function(response) {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Successful response :)
    return response.url
  })
  .then(function(data) {
    imgDiv.setAttribute('src', data)
  })
  .catch(function(err) {
    // Error :(
    console.log('err')
  });