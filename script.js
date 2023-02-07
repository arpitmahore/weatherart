// let finalSubmit = document.getElementById('finalSubmit');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '577d0e8f5cmsh9bec304960cd15ap146d89jsn9b5c65d7a33c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cityName.innerHTML = city
		temp.innerHTML = response.temp
		temp1.innerHTML = response.temp
		humidity.innerHTML = response.humidity
		humidity1.innerHTML = response.humidity
		wind_speed.innerHTML = response.wind_speed
		wind_speed1.innerHTML = response.wind_speed
		feels_like.innerHTML = response.feels_like
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		// cloud_pct.innerHTML = response.cloud_pct	
	})
	.catch(err => console.error(err));	
}

// finalSubmit.addEventListener("click", (e)=>{
// 		e.preventDefault()	
// 		getWeather(city.value)
// })

function mySubmit() {
	let city = document.getElementById("innerCity").value;
	document.getElementById("demo").innerHTML = city;
	getWeather(city)
	e.preventDefault()
}
	
function weatherSite() {
	window.open("https://weather.com/en-IN/weather/today/l/20.95,77.77?par=google", "_blank");
  }

getWeather("Amravati")
// ......................................................... 