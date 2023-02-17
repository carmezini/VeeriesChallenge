import React from 'react';
import '../App.css'


const Weather = ({description, temp_min, temperature, temp_max, humidity, wind, rain, icon}) => {
    return (
        <div>
            <div className='macro-details'>
                {icon && <p className='icon'>{icon}</p>}
                {temperature && <p className='temp'>{temperature}ºC </p>}
            </div>
            <div className='micro-details'>
                {temp_min && <p className='max_min_temp'>Máx: {temp_min}ºC | Min: {temp_max}ºC </p>}

                {wind && <p className='wind'>Wind: {wind} km/h</p>}
                {rain && <p className='rain'>Rain: {rain} volume</p>}
                {humidity && <p className='humidity'>Humidity: {humidity} %</p>}

            </div>
        </div>

    )
}

export default Weather;