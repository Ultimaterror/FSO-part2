import axios from "redaxios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";
const OWAK = import.meta.env.VITE_OPEN_WEATHER_API_KEY

const getAll = () => {
  return axios.get(`${baseUrl}/all`);
};

const getOne = (name) => {
  return axios.get(`${baseUrl}/name/${name}`);
};

const getWeather = (capital) => {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&APPID=${OWAK}`)
}


export default {
  getAll,
  getOne,
  getWeather
};
