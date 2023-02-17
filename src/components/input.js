import React from 'react'
import '../App.css'
import { Search } from 'react-feather';

const Input = (props) => {
    return (
        <form className='form-input' onSubmit={props.getWeather}>
            <input className='input-city' type='text' placeholder='Enter city' name='city' />
        <button className='button-search' onSubmit={props.getWeather}>
            <Search className='search-icon'></Search>
        </button>

        </form>
    )
}

export default Input;