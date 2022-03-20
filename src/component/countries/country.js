import React from 'react';
import './countries.css'

const Country = (props) => {
    // console.log(props.country)
    const { name,area, population,flags}= props.country
    return (
        <div className='country-container bg-light'>
            <h4>{name.common}</h4>
            <img src={flags.png} alt=" flags" />
            <p> Area: {area}</p>
            <small>Population: {population}</small>
        </div>
    );
};

export default Country;