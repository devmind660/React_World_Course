import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "./Card";
import Country from "./Country";

const Countries = () => {
    // useState & useEffect = hooks
    const [countriesData, setCountriesData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState();
    const [searchValue, setSearchValue] = useState("");
    const [rangeValue, setRangeValue] = useState(250);
    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
    const filteredCountries = countriesData
        .filter((country) => country.continents[0].includes(selectedRadio))
        .filter((country) => country.translations.fra.common.toLowerCase().includes((searchValue.toLowerCase())))
        .sort((a, b) => b.population - a.population) // Tri décroissant par nb d'habitants
        .slice(0, rangeValue);

    useEffect(() => { // useEffect = Mounted()
        axios.get("https://restcountries.com/v3.1/all")
            .then((res) => setCountriesData(res.data));
    }, [])

    console.log(selectedCountry);

    return (
        <div className="countries">
            {!selectedCountry && <div>
                <ul className="radio-container">
                    <input type="range" min="1" max="250"
                           defaultValue={rangeValue}
                           onChange={(e) => setRangeValue(e.target.value)} />
                    {radios.map((continent, index) => (
                        <li key={index}>
                            <input type="radio" id={continent} name="continentRadio"
                                   checked={continent === selectedRadio}
                                   onChange={(e) => setSelectedRadio(e.target.id)} />
                            <label htmlFor={continent}>{continent}</label>
                        </li>
                    ))}
                    <input type="search" id="search" name="searchInput" value={searchValue}
                           max="100" placeholder="Recherche…"
                           onChange={(e) => setSearchValue(e.target.value)} />
                </ul>
                <p>{filteredCountries.length} résultat{filteredCountries.length > 1 && "s"}</p>
                {(selectedRadio || searchValue) && <button onClick={() => {
                    setSelectedRadio("");
                    setSearchValue("");
                }}>Annuler la recherche</button>}
            </div>}

            {selectedCountry && <div className="country">
                <Country country={selectedCountry} />
                <button onClick={() => {
                    setSelectedCountry("");
                }}>Retour à la liste</button>
            </div>}

            {!selectedCountry && <ol>
                {filteredCountries.map((country, index) =>
                    <Card key={index} country={country}
                          handler={() => setSelectedCountry(country)} />
                )}
            </ol>}
        </div>
    );
}

export default Countries;