import React from "react";

const Country = ({country}) => {
    return (
        <div className="country-container">
            <h1><span>{country.flag}</span>{country.name.translations.fra.official}</h1>
            <h2>Capitale : <small>{country.capital}</small></h2>
            <h2>Continent : {country.continents.map((continent, index) => <small key={index}>{continent}</small>)}</h2>
            <h2>Langues : {country.languages.map((language, index) => <small key={index}>{language}</small>)}</h2>
        </div>
    );
};

export default Country;