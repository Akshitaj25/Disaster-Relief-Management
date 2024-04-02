import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RightPanel = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null); // Track any errors
  const location = 'Patiala';
  const apiKey = '370120e3ddbba6416b142f7181b6e494'; // Replace with your actual API key

  const handleError = (error) => {
    setError(error.message); // Set error message
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
        setWeatherData(response.data);
      } catch (error) {
        handleError(error); // Handle errors
      }
    };

    fetchWeather();
  }, [location]);

  // Function to handle location input changes (if you want to add user input)
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="right-panel">
      <h2>Weather Report </h2>
      {/* Input for changing location (optional)
      <input type="text" value={location} onChange={handleLocationChange} /> */}

      {error ? (
        <p>Error: {error}</p> // Display error message if any
      ) : weatherData ? (
        <div className='rightcont'>
          <p><strong>Coordinates:</strong> <br/>Longitude:  {weatherData.coord.lon}<br/> Lattitude: {weatherData.coord.lat}</p>
            <p><strong>Location:</strong> {weatherData.name}, {weatherData.sys.country}</p>
            <p><strong>Weather:</strong> {weatherData.weather[0].main}</p>
          <p><strong>Temperature:</strong> {weatherData.main.temp}°C <br/>Minimum Temperature: {weatherData.main.temp_min}<br/>Maximum temperature: {weatherData.main.temp_max}</p>
            <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
            <p><strong>Pressure:</strong> {weatherData.main.pressure} hPa</p>
            <p><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
            <p><strong>Visibility:</strong> {weatherData.visibility} m</p>
          {/* <p><strong>Description:</strong> {weatherData.weather[0].description} , {weatherData.weather[0].icon}</p> */}

          {/* Add more weather data as needed */}
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default RightPanel;
