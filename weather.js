function getApi() {
  
  const API = '30d2e66c96244fb068a88960c18a85c9'
  const lat = '53.504010708083136'
  const lon = '-2.142103173828125'
  const units = 'metric'
  const exclude = 'hourly, minutely, alerts'

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API}&units=${units}&exclude=${exclude}`
  fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
        .catch(console.error)
      
    }
    )


}

getApi()
    