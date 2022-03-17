import React from 'react';
import './Country.css'
// ------------destructuring-------
const Country = (props) => {
    const {area, population, name, flags} = props.country
    return (
        <div className='country'>
            <h2>Name:{name.common}</h2>
            <img src={flags.png} alt="" />
            <h3>Population:{population}</h3>
            <h3>Area:{area}</h3>
        </div>
    );
};
/* const Country = (props) => {
    return (
        <div className='country'>
            <h2>Country Name:{props.country.name.common}</h2>
            <h3>Population:{props.country.population}</h3>
            <h3>Area:{props.country.area}</h3>
        </div>
    );
}; */


export default Country;