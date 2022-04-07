import React from "react";

const Country = ({country}) => {
    const currencies = Object.values(country.currencies);
    const currenciesCode = Object.keys(country.currencies);
    const languages = Object.values(country.languages);
    const languagesCode = Object.keys(country.languages);

    return (
        <div className="country-container">
            <h1>{country.flag} {country.translations.fra.official}</h1>
            <ul>
                <li>
                    <h3>Capitale :</h3>
                    <p>{country.capital}</p>
                </li>
                <li>
                    <h3>Population :</h3>
                    <p>{country.population.toLocaleString()}</p>
                </li>
                <li>
                    <h3>Indépendance :</h3>
                    <p>{country.independent ? "Oui" : "Non"}</p>
                </li>
                <li>
                    <h3>Langue{languages.length > 1 && "s"} :</h3>
                    <p>{languages.map((language, i) => <span key={i}>{language} </span>)}</p>
                </li>
                <li>
                    <h3>Devise{currencies.length > 1 && "s"} :</h3>
                    <p>{currencies.map((currency, i) => <span key={i}>{currency.name} ({currency.symbol}) </span>)}</p>
                </li>
                <li>
                    <h3>Superficie :</h3>
                    <p>{country.area.toLocaleString()} km²</p>
                </li>
                <li>
                    <h3>Région :</h3>
                    <p>{country.region}</p>
                </li>
                <li>
                    <h3>Sous-région :</h3>
                    <p>{country.subregion}</p>
                </li>
                <li>
                    <h3>Code pays :</h3>
                    <p>{country.cca3}</p>
                </li>
                <li>
                    <h3>Code{languagesCode.length > 1 && "s"} langue :</h3>
                    <p>{languagesCode.map((language, i) => <span key={i}>{language.toUpperCase()} </span>)} {languagesCode.length > 1 && <span>({languagesCode.length})</span>} </p>
                </li>
                <li>
                    <h3>Code{currenciesCode.length > 1 && "s"} devise :</h3>
                    <p>{currenciesCode.map((currency, i) => <span key={i}>{currency} </span>)}</p>
                </li>
                <li>
                    <h3>Pays frontalier{(country.borders && country.borders.length > 1) && "s"} :</h3>
                    {country.borders ? <p>{country.borders.map((border, i) => <span key={i}>{border} </span>)} {country.borders.length > 1 && <span>({country.borders.length})</span>}</p> : <p>Aucun</p>}
                </li>
            </ul>
        </div>
    );
};

export default Country;