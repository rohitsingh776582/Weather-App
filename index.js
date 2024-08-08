

const search = document.querySelector(".serch");
const button = document.querySelector(".button");
const degree2 = document.querySelector(".dgree2");
const percent = document.querySelector(".persent");
const km = document.querySelector(".km");
const weatherImage = document.querySelector(".wether-image");
const rain = document.querySelector(".rain");

async function checkWeather(city) {
    const apiKey = "be8c8333d1774a14f7293cc3ad4e4ed0";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

         console.log(url);
    try {
        const response = await fetch(url);
        const weatherData = await response.json();

                      
        
        if (response.ok) {
           

            // Update DOM elements with the fetched data
            degree2.textContent = `${weatherData.main.temp} °C`;
            percent.textContent = `${weatherData.main.humidity} %`;
            km.textContent = `${weatherData.wind.speed} km/h`;
            rain.textContent = `${weatherData.weather[0].description}`;

            // Update weather image
            const icon = weatherData.weather[0].icon;
            weatherImage.src = `http://openweathermap.org/img/wn/${icon}.png`;
        } else {
            console.error(`Error: ${weatherData.message}`);
        }
    } catch (error) {
       // console.error('Error fetching weather data:', error);
    }
}

button.addEventListener('click', function () {
    const city = search.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        console.error('Please enter a city name');
    }
});








