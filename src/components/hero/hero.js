import {React, useState} from "react";
import DateObject from "react-date-object";
import './hero.css';

const api = {
    key: "1a2a643840c6fd58ed3c7fdbacea2121",
    base: "http://api.openweathermap.org/data/2.5/weather?"
}


const Hero = () => {
    const [weather, setWeather] = useState({})
    const [query, setQuery] = useState(' ');
    const [date, setDate] = useState(new DateObject());
    const [response, setResponse] = useState();

    
    setInterval(() => {
        setDate(new DateObject())
    }, 60000)

    function handleQuery(e) {
        setQuery(e.target.value);
        
    }

    async function getWeather(e) {
        e.preventDefault();

        let response = await fetch(`${api.base}q=${query}&units=metric&apikey=${api.key}`);
        setResponse(response.status);
        let data =  await response.json();
        setWeather(data.main);
    }

    console.log(date);
    return (
        <div className="hero">
        <form className="query__form" onSubmit={(e) => getWeather(e)}>
            <input type="text"  onChange={(e) =>handleQuery(e)}></input>
            {/* <button type="button" onClick={getWeather}></button> */}
        </form>
        <div className="hero__section">
            <div className="hero__section_date">{date.format("dddd").toUpperCase()}</div>
            <div className={`hero__weather ${weather.temp ? 'active' : ""}`}>
                <span className="hero__weather_temp">{Math.floor(weather.temp) ? Math.floor(weather.temp) : " "}&#176;</span>
                <div className="hero__weather_extra">
                    <span className="hero__weather_max">Max: {Math.floor(weather.temp_max)}&#176;</span>
                    <span className="hero__weather_min">Min: {Math.floor(weather.temp_min)}&#176;</span>
                    <span className="hero__weather_hum">Hum: {Math.floor(weather.humidity)}</span>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Hero;