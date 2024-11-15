// App.jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const apiKey = '4655e0ec4b10eb81b9c7200a8009f058';

  const getWeather = async () => {
    if (!city) {
      alert('Please enter a city');
      return;
    }

    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`),
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
      ]);

      if (!weatherResponse.ok || !forecastResponse.ok) {
        throw new Error('Weather data fetch failed');
      }

      const weatherData = await weatherResponse.json();
      const forecastData = await forecastResponse.json();

      setWeatherData(weatherData);
      setHourlyForecast(forecastData.list.slice(0, 8));
    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('Error fetching weather data. Please try again.');
    }
  };

  return (
    <div className="weather-container">
      <h2>Weather App</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={getWeather}>Search</button>

      {weatherData && (
        <>
          <img
            id="weather-icon"
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
            alt={weatherData.weather[0].description}
            style={{ display: 'block' }}
          />
          <div className="temp-div">
            <p>{Math.round(weatherData.main.temp - 273.15)}°C</p>
          </div>
          <div className="weather-info">
            <p>{weatherData.name}</p>
            <p>{weatherData.weather[0].description}</p>
          </div>
        </>
      )}

      {hourlyForecast && (
        <div className="hourly-forecast">
          {hourlyForecast.map((item, index) => (
            <div className="hourly-item" key={index}>
              <span>{new Date(item.dt * 1000).getHours()}:00</span>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt="Hourly Weather Icon"
              />
              <span>{Math.round(item.main.temp - 273.15)}°C</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

