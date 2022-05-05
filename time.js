const sunrise = 1651120811
const sunriseTime = new Date(sunrise * 1000)
const sunriseDay0 = document.getElementById('sunriseTimeToday')
sunriseDay0.textContent = sunriseTime.getHours + ':' + sunriseTime.getMinutes
console.log(sunriseTime)

// const sunset = 1651174303
// const sunsetTime = new Date(sunset * 1000)
// document.getElementById('sunsetTimettoday').innerHTML = sunsetTime.getHours + ':' + sunsetTime.getMinutes