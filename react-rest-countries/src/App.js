import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './Components/Countries/Countries';
function App(){
  return(
    <div className = 'App'>
      <Countries></Countries>
    </div>
  )
}
/* function LoadCountries(){
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  return(
    <div>
      <h1>Visiting ervry country of the world</h1>
      <h3>Aviailable Countries:{countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common}population={country.population} area={country.area}></Country>)
      }
    </div>
  )
}
function Country(props){
  return(
    <div>
      <h3>Name:{props.name}</h3>
      <h3>Population:{props.population}</h3>
      <h3>Area: {props.area}</h3>
    </div>
  )
}  */
export default App;
