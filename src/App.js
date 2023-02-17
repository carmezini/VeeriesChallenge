import React, {useState} from 'react';
import './App.css';
import Input  from '../src/components/input';
import Icons from '../src/components/icons';
import WeatherData from '../src/components/weatherData';


function App() {


    const [weather,setWeather] = useState([]);

    async function fetchData(e) {
        const city = e.target.elements.city.value
        e.preventDefault()
        const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then( res => res.json())
            .then(data => data)
        if(city) {
            setWeather({
                temperature: apiData.main.temp,
                description: apiData.weather[0].main,
                temp_min: apiData.main.temp_min,
                temp_max: apiData.main.temp_max,
                wind: apiData.wind.speed,
                humidity: apiData.main.humidity,
                rain: apiData.weather.rain,
                icon: apiData.weather[0].main
            })
        } else {

            setWeather({
                temperature: '',
                description: '',
                temp_min: '',
                temp_max: '',
                wind:'',
                humidity: '',
                rain: '',
                icon: '',
            })
        }
        
    }
      

    return (
        <div className='container'>
            <h1 className='title'>Desafio Veeries</h1>
            <Input getWeather={fetchData} />
            <WeatherData
                temperature={weather.temperature}
                description={weather.description}
                temp_min={weather.temp_min}
                temp_max={weather.temp_max}
                wind={weather.wind}
                humidity={weather.humidity}
                rain={weather.rain}
                icon={<img className='icon-description' src={Icons(weather.description)} alt='icon-weather' ></img>}
            />
            
        </div>
  
  );
}

export default App;