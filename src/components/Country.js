import React from "react";

const Country = ({country}) => {
    let currencies, currenciesCode, languages, languagesCode;

    if (country.currencies) {
        currencies = Object.values(country.currencies);
        currenciesCode = Object.keys(country.currencies);
    }
    if (country.languages) {
        languages = Object.values(country.languages);
        languagesCode = Object.keys(country.languages);
    }

    return (
        <div className="country-container">
            <h1>{country.flag} {country.translations.fra.official}</h1>
            <ul>
                <li>
                    <h3>Capitale :</h3>
                    {country.capital ?
                        <p>{country.capital}</p> : <p>–</p>}
                </li>
                <li>
                    <h3>Population :</h3>
                    <p>{country.population.toLocaleString()}</p>
                </li>
                <li>
                    <h3>Indépendance :</h3>
                    <p>{country.independent ?"Oui" : "Non"}</p>
                </li>
                <li>
                    <h3>Langue{(languages && languages.length) > 1 && "s"} :</h3>
                    {languages ?
                        <p>{languages.map((language, i) => <span key={i}>{language} </span>)}</p> : <p>–</p>}
                </li>
                <li>
                    <h3>Devise{(currencies && currencies.length) > 1 && "s"} :</h3>
                    {currencies ?
                        <p>{currencies.map((currency, i) => <span key={i}>{currency.name} ({currency.symbol}) </span>)}</p> : <p>–</p>}
                </li>
                <li>
                    <h3>Superficie :</h3>
                    <p>{country.area.toLocaleString()} km²</p>
                </li>
                <li>
                    <h3>Continent :</h3>
                    <p>{country.region}</p>
                </li>
                <li>
                    <h3>Région :</h3>
                    {country.subregion ?
                        <p>{country.subregion}</p> : <p>–</p>}
                </li>
                <li>
                    <h3>Code pays :</h3>
                    <p>{country.cca3}</p>
                </li>
                <li>
                    <h3>Code{(languagesCode && languagesCode.length) > 1 && "s"} langue :</h3>
                    {languagesCode ?
                        <p>{languagesCode.map((language, i) => <span key={i}>{language.toUpperCase()} </span>)} {languagesCode.length > 1 && <span>({languagesCode.length})</span>} </p> : <p>–</p>}
                </li>
                <li>
                    <h3>Code{(currenciesCode && currenciesCode.length) > 1 && "s"} devise :</h3>
                    {currenciesCode ?
                        <p>{currenciesCode.map((currency, i) => <span key={i}>{currency} </span>)}</p> : <p>–</p>}
                </li>
                <li>
                    <h3>Pays frontalier{(country.borders && country.borders.length > 1) && "s"} :</h3>
                    {country.borders ?
                        <p>{country.borders.map((border, i) => <span key={i}>{border} </span>)} {country.borders.length > 1 && <span>({country.borders.length})</span>}</p> : <p>–</p>}
                </li>
            </ul>
        </div>
    );
};

export default Country;