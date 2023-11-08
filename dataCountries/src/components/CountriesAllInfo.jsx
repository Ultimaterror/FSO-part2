import React, { useEffect, useState } from "react";
import getWeather from "../services/weather";

export default function CountriesAllInfo({ country }) {
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    getWeather(country.capital[0]).then((res) => setWeatherInfo(res.data));
  }, []);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital : {country.capital[0]}</p>
      <p>Area : {country.area}</p>
      <div>
        <h3>Languages</h3>
        <ul>
          {Object.entries(country.languages).map((lang) => (
            <li key={lang[0]}>{lang[1]}</li>
          ))}
        </ul>
      </div>
      <img src={country.flags.png} alt={country.flags.alt} />
      {weatherInfo && (
        <div>
          <h2>Weather in {country.capital[0]}</h2>
          <p>Weather : {weatherInfo.weather[0].main}</p>
          <p>Temperature : {weatherInfo.main.temp}°C</p>
          <p>Wind : {weatherInfo.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}
