import axios from "redaxios";
const OWAK = import.meta.env.VITE_OPEN_WEATHER_API_KEY

const getWeather = (capital) => {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&APPID=${OWAK}`)
}


export default getWeather
