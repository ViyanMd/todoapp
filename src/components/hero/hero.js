import {React, useState} from "react";
import DateObject from "react-date-object";
import './hero.css';

const api = {
    key: "1a2a643840c6fd58ed3c7fdbacea2121",
    base: "http://api.openweathermap.org/data/2.5/weather?"
}

const Hero = () => {
    const [weather, setWeather] = useState({})

    function getWeather() {
        fetch(`${api.base}q=Москва&units=metric&apikey=${api.key}`)
        .then(res => res.json())
        .then(data => setWeather(data.main));
    }
    return (
        <div className="hero__section">
            <h1>{Math.floor(weather.temp)}&#176;</h1>
            <h3>Feels like: {Math.floor(weather.feels_like)}&#176;</h3>
            <button onClick={getWeather}>Get Weather</button>
        </div>
    )
}

export default Hero;