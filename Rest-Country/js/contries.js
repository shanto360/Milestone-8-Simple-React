const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = countries =>{
    console.log(countries)
    const CountriesHTML = countries.map(country => getCountryHTML(country))
    // console.log(CountriesHTML[0])
    const container = document.getElementById('countries');
    container.innerHTML = CountriesHTML
}
const getCountryHTML = country => {
    return`
    <div>
        <h2>${country.name.common}</h2>
    </div>
    `
}
loadCountries()