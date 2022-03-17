import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div className='country'>
            <h2>Country Name:{props.name}</h2>
            <h3>Population:{props.population}</h3>
            <h3>Area:{props.area}</h3>
        </div>
    );
};

export default Country;