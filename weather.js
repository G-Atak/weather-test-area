

// setInterval(() =>{
//   const time = new Date()
//   const month = time.getMonth()
//   const date = time.getDate()
//   const day = time.getDate()
//   const hour = time.getHours()
  

// setInterval(() => {
//   const time = new Date()
//   const month = time.getMonth()
//   const date = time.getDate()
//   const day = time.getDay()
//   const hour = time.getHours()
//   const minutes = time.getMinutes()

// timeEl.textContent = hour + ':' + minutes 
// dateEl.textContent = days[day] + ', ' +date+ ' ' + months[month]
// const sunriseJsFormat = 1651207086
// const sunriseDate = new Date(sunriseJsFormat * 1000)
// document.getElementById('sunsetDay2').innerHTML = sunriseDate.getHours + ':' + sunriseDate.getMinutes()



// }, 1000)

function getApi() {
  
  const API = '30d2e66c96244fb068a88960c18a85c9'
  const inputLat = '53.504010708083136'
  const inputLng = '-2.142103173828125'
  const units = 'metric'
  const exclude = 'hourly, minutely, alerts'
  const lang = 'Eng'
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${inputLat}&lon=${inputLng}&appid=${API}&units=${units}&exclude=${exclude}&lang=${lang}`

  fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      
      const currentHumidity = document.getElementById('getHumidity')
      currentHumidity.textContent = data.current.humidity
      const currentPressure = document.getElementById('getPressure')
      currentPressure.textContent = data.current.pressure
      const currentWindSpeed = document.getElementById('getWindSpeed')
      currentWindSpeed.textContent = data.current.wind_speed
      const sunriseToday = document.getElementById('getSunrise')
      sunriseToday.textContent = data.current.sunrise
      const sunsetToday = document.getElementById('getSunset')
      sunsetToday.textContent = data.current.sunset
      const tempToday = document.getElementById('getTemp')
      tempToday.textContent = data.current.temp
      
      //week 0
      const tDay0 = document.getElementById('tempDay0')
      tDay0.textContent = data.daily[0].temp.day
      const tNight0 = document.getElementById('tempNight0')
      tNight0.textContent = data.daily[0].temp.night
      const pressure0 = document.getElementById('pressureDay0')
      pressure0.textContent = data.daily[0].pressure
      const humidity0 = document.getElementById('humidityDay0')
      humidity0.textContent = data.daily[0].humidity
      const sunrise0 = document.getElementById('sunriseDay0')
      sunrise0.textContent = data.daily[0].sunrise
      const sunset0 = document.getElementById('sunsetDay0')
      sunset0.textContent = data.daily[0].sunset


      //week 1

      const tDay1 = document.getElementById('tempDay1')
      tDay1.textContent = data.daily[1].temp.day
      const tNight1 = document.getElementById('tempNight1')
      tNight1.textContent = data.daily[1].temp.night
      const pressure1 = document.getElementById('pressureDay1')
      pressure1.textContent = data.daily[1].pressure
      const humidity1 = document.getElementById('humidityDay1')
      humidity1.textContent = data.daily[1].humidity
      const sunrise1 = document.getElementById('sunriseDay1')
      sunrise1.textContent = data.daily[1].sunrise
      const sunset1 = document.getElementById('sunsetDay1')
      sunset1.textContent = data.daily[1].sunset

      //week 2

      const tDay2 = document.getElementById('tempDay2')
      tDay2.textContent = data.daily[2].temp.day
      const tNight2 = document.getElementById('tempNight2')
      tNight2.textContent = data.daily[2].temp.night
      const pressure2 = document.getElementById('pressureDay2')
      pressure2.textContent = data.daily[2].pressure
      const humidity2 = document.getElementById('humidityDay2')
      humidity2.textContent = data.daily[2].humidity
      const sunrise2 = document.getElementById('sunriseDay2')
      sunrise2.textContent = data.daily[2].sunrise
      const sunset2 = document.getElementById('sunsetDay2')
      sunset2.textContent = data.daily[2].sunset

      //week 3

      const tDay3 = document.getElementById('tempDay3')
      tDay3.textContent = data.daily[3].temp.day
      const tNight3 = document.getElementById('tempNight3')
      tNight3.textContent = data.daily[3].temp.night
      const pressure3 = document.getElementById('pressureDay3')
      pressure3.textContent = data.daily[3].pressure
      const humidity3 = document.getElementById('humidityDay3')
      humidity3.textContent = data.daily[3].humidity
      const sunrise3 = document.getElementById('sunriseDay3')
      sunrise3.textContent = data.daily[3].sunrise
      const sunset3 = document.getElementById('sunsetDay3')
      sunset3.textContent = data.daily[3].sunset

      //week 4

      const tDay4 = document.getElementById('tempDay4')
      tDay4.textContent = data.daily[4].temp.day
      const tNight4 = document.getElementById('tempNight4')
      tNight4.textContent = data.daily[4].temp.night
      const pressure4 = document.getElementById('pressureDay4')
      pressure4.textContent = data.daily[4].pressure
      const humidity4 = document.getElementById('humidityDay4')
      humidity4.textContent = data.daily[4].humidity
      const sunrise4 = document.getElementById('sunriseDay4')
      sunrise4.textContent = data.daily[4].sunrise
      const sunset4 = document.getElementById('sunsetDay4')
      sunset4.textContent = data.daily[4].sunset

      //week 5
      const tDay5 = document.getElementById('tempDay5')
      tDay5.textContent = data.daily[5].temp.day
      const tNight5 = document.getElementById('tempNight5')
      tNight5.textContent = data.daily[5].temp.night
      const pressure5 = document.getElementById('pressureDay5')
      pressure5.textContent = data.daily[5].pressure
      const humidity5 = document.getElementById('humidityDay5')
      humidity5.textContent = data.daily[5].humidity
      const sunrise5 = document.getElementById('sunriseDay5')
      sunrise5.textContent = data.daily[5].sunrise
      const sunset5 = document.getElementById('sunsetDay5')
      sunset5.textContent = data.daily[5].sunset

      // const sunriseJsFormat = 1651207086
      // const sunriseDate = new Date(sunriseJsFormat * 1000)
      // document.getElementById('sunsetDay2').innerHTML = sunriseDate.getHours + ':' + sunriseDate.getMinutes()
      let sunrise = data.sunrise
      let sunset = data.sunset
      sunrise = new Date(data.sunrise * 1000).toTimeString()
      sunset = new Date(data.sunset * 1000).toTimeString()
      document.getElementById('sunsetDay2').innerHTML = sunrise.getHours + ':' + sunrise.getMinutes()

    }    
    )
}
getApi()

//1651207086
// 1651260812
// const sunriseJsFormat = 1651207086
// const sunriseDate = new Date(sunriseJsFormat * 1000)
// document.getElementById('getSunrise').innerHTML = sunriseDate.getHours + ':' + sunriseDate.getMinutes()



    //current weather
// function weatherData(data){
//   const { humidity, pressure, sunrise, sunset, wind_speed, temp, uvi, visibility, clouds,feels_like } = data.current
//   currentWeatherItemsEl.innerHTML = `<div class="weather-item">
//   <div>Humidity</div>
//   <div>${humidity}</div>
//   </div>
//   <div class="weather-item">
//   <div>Pressure</div>
//     <div>${pressure}</div>
//     </div>
//     <div class="weather-item">
//     <div>wind_speed</div>
//       <div>${wind_speed}</div>
//       </div>
//       <div class="weather-item">
//       <div>sunrise</div>
//         <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
//         </div>
//         <div class="weather-item">
//         <div>sunset</div>
//<div>${window.moment(sunset * 1000).format('HH:mm a')}</div>
//           </div>
//           <div class="weather-item">
//           <div>Temp</div>
//             <div>${temp}</div>
//             </div>
//             <div class="weather-item">
//             <div>UVI</div>
//               <div>${uvi}</div>
//               </div>
//               <div class="weather-item">
//               <div>Visibility</div>
//                 <div>${visibility}</div>
//                 </div>
//                 <div class="weather-item">
//                 <div>clouds</div>
//                   <div>${clouds}</div>
//                   </div>
//                   <div class="weather-item">
//                   <div>feels_like</div>
//                     <div>${feels_like}</div>
              
//                     </div>`

  
new Date()