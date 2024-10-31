function getWeather() {
    const apiKey = `4655e0ec4b10eb81b9c7200a8009f058`;
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Current weather error: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => {
            console.error('Error fetching current weather data:', error);
            alert('Error fetching current weather data. Please try again.');
        });

    fetch(forecastUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Forecast error: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => displayHourlyForecast(data.list))
        .catch(error => {
            console.error('Error fetching hourly forecast data:', error);
            alert('Error fetching hourly forecast data. Please try again.');
        });
}

function displayWeather(data) {
    // Corrected method name to 'getElementById'
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementsByClassName('weather-info')[0];
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv = document.getElementsByClassName('hourly-forecast')[0];

    if (!tempDivInfo || !weatherInfoDiv || !weatherIcon || !hourlyForecastDiv) {
        console.error('One or more elements are missing in the DOM.');
        return;
    }

    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';

    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

        tempDivInfo.innerHTML = `<p>${temperature}°C</p>`;
        weatherInfoDiv.innerHTML = `<p>${cityName}</p><p>${description}</p>`;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;
        weatherIcon.style.display = 'block';
    }
}

// Ensure displayHourlyForecast is properly defined and accessible
function displayHourlyForecast(hourlyData) {
    const hourlyForecastDiv = document.getElementsByClassName('hourly-forecast')[0];
    const next24Hours = hourlyData.slice(0, 8);

    hourlyForecastDiv.innerHTML = ''; // Clear previous hourly data

    next24Hours.forEach(item => {
        const dateTime = new Date(item.dt * 1000);
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15);
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHTML = `
            <div class="hourly-item">
                <span>${hour}:00</span>
                <img src="${iconUrl}" alt="Hourly Weather Icon">
                <span>${temperature}°C</span>
            </div>
        `;
        hourlyForecastDiv.innerHTML += hourlyItemHTML;
    });
}