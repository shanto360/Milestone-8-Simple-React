import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>All counter in the world</h1>
            <h2>Aviailable Countries:{countries.length}</h2>
            {
                countries.map(country => <Country country={country} ></Country>)
            }
            {/* {
                countries.map(country => <Country name={country.name.common} population={country.population} area={country.area} ></Country>)
            } */}
            {/* {
                countries.map(country => <AllCountries name={country.name.common}population={country.population} area={country.area}></AllCountries>)
            } */}
        </div>
    );
};
// function AllCountries(props){
//     return(
//         <div className='countries'>
//             <h3>Name: {props.name}</h3>
//             <h3>Population: {props.population}</h3>
//             <h3>Area: {props.area}</h3>
//         </div>
//     )
// }
export default Countries;