const dataDiv = document.querySelector('#data')

// URL (required), options (optional)
fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ridgewood?key=86DXP8CF2L7LZV4FNKA8SH9RQ', {mode: 'cors'})
  .then(function(response) {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Successful response :)
    return response.json()
  })
  .then(function(data) {
    // console.log(data)
    dataDiv.textContent = JSON.stringify(data, null, 2)
  })
  .catch(function(err) {
    // Error :(
    console.log('err')
  });

