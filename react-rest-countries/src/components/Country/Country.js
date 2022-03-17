import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div className='country'>
            <h2>Country Name:{props.country.name.common}</h2>
            <h3>Population:{props.country.population}</h3>
            <h3>Area:{props.country.area}</h3>
        </div>
    );
};

export default Country;