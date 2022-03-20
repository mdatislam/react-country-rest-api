import React, {useState, useEffect } from 'react';
import Country from './country'

const Countries = () => {
    const [countries,setCountries] = useState([])
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>setCountries(data))
    },[])


    return (
        <div>
            <h2 className='text-danger mt-4 bg-warning p-2 rounded-pill'> Total Loaded countries: {countries.length}</h2>
           <div className='container ms-auto mt-5'>
           {
                countries.map(country=> <Country country={country} key = {country.cca3}></Country>)
            }
           </div>
            
        </div>
    );
};

export default Countries;