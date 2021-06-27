const api = {
  key: "09a1a63813180d9100604482e0dd6aa5",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults (query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weathertype = document.querySelector('.current .weather');
  weathertype.innerText = weather.weather[0].main;

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

  if(weathertype.textContent == 'Clear') {
    document.body.style.backgroundImage = "url('clear.jpg')";
    
} else if(weathertype.textContent == 'Clouds') {

    document.body.style.backgroundImage = "url('cloudy.png')";
    
} else if(weathertype.textContent == 'Haze') {

    document.body.style.backgroundImage = "url('haze.jpg')";
    
}     else if(weathertype.textContent == 'Rain') {
    
    document.body.style.backgroundImage = "url('rainy.jpg')";
    
} else if(weathertype.textContent == 'Snow') {
    
    document.body.style.backgroundImage = "url('snow.jpg')";

} else if(weathertype.textContent == 'Thunderstorm') {

    document.body.style.backgroundImage = "url('thunderstorm.jpg')";
    
} 
else if(weathertype.textContent == 'Mist') {

    document.body.style.backgroundImage = "url('mist.jpg')";
    
} 
else if(weathertype.textContent == 'Sunny') {

    document.body.style.backgroundImage = "url('sunny.png')";
    
} 

if(weathertype.textContent == 'Clear') {
  var image= document.getElementById('weather-image');
  image.src= "clear1.png";
  
} else if(weathertype.textContent == 'Clouds') {

  var image= document.getElementById('weather-image');
  image.src= "cloud1.png";
  
} else if(weathertype.textContent == 'Haze') {

  var image= document.getElementById('weather-image');
  image.src= "haze1.png";
}     
else if(weathertype.textContent == 'Rain') {
  
 var image= document.getElementById('weather-image');
  image.src= "rainy1.png";
  
} else if(weathertype.textContent == 'Snow') {
  
  var image= document.getElementById('weather-image');
  image.src= "snow1.png";

} else if(weathertype.textContent == 'Thunderstorm') {

  var image= document.getElementById('weather-image');
  image.src= "thunderstorm1.png";
  
} 
else if(weathertype.textContent == 'Mist') {

  var image= document.getElementById('weather-image');
  image.src= "mist1.png";
  
} 
else if(weathertype.textContent == 'Sunny') {

  var image= document.getElementById('weather-image');
  image.src= "sunny1.png";


  
} 


}

function dateBuilder (d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}