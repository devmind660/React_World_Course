import React from "react";

const Country = ({country}) => {
    return (
        <div className="country-container">
            <h1>{country.flag} {country.translations.fra.official}</h1>
        </div>
    );
};

export default Country;